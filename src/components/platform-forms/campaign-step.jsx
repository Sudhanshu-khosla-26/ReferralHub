"use client"
import Input from "../ui/input.jsx"
import Select from "../ui/select.jsx"
import Textarea from "../ui/textarea.jsx"
import Button from "../ui/button.jsx"
import PlatformSetup from "../platformpage.jsx"
import { useNavigate } from "react-router-dom"

export default function CampaignStep({ data, setData, onNext, isLastStep }) {
  const navigate = useNavigate();



  const handleChange = (field, value) => {
    setData({ ...data, [field]: value })
    localStorage.setItem("campaigndetails", JSON.stringify({ ...data, [field]: value }))
  }

  const handleNestedChange = (parent, field, value) => {
    setData({
      ...data,
      [parent]: {
        ...data[parent],
        [field]: value,
      },
    })
  }

  const rewardTypeOptions = [
    { value: "Points", label: "Points" },
    { value: "Discount", label: "Discount" },
    { value: "Cash", label: "Cash" },
    { value: "Gift", label: "Gift" },
  ]

  const actionTypeOptions = [
    { value: "Email", label: "Email" },
    { value: "SMS", label: "SMS" },
    { value: "Wait Duration", label: "Wait Duration" },
  ]

  const phoneOptions = [{ value: "1", label: "Select" }]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Create New Campaign</h2>
        <p className="mt-1 text-sm text-gray-500">Create a new referral campaign in just few steps.</p>
      </div>

      <div className="space-y-6">
        <Input
          label="Campaign Name"
          id="campaignName"
          placeholder="e.g., Summer Referral Special"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Promoter Settings</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Reward Type*"
              id="promoterRewardType"
              options={rewardTypeOptions}
              value={data.promoterRewardType}
              onChange={(value) => handleChange("promoterRewardType", value)}
            />

            <Input
              label="Reward Value*"
              id="promoterRewardValue"
              placeholder={data.promoterRewardType === "Points" ? "e.g., 200 points" : "e.g., 20%"}
              value={data.promoterRewardValue}
              onChange={(e) => handleChange("promoterRewardValue", e.target.value)}
            />
          </div>

          <div className="mt-4">
            <Textarea
              label="Promoter Message*"
              id="promoterMessage"
              placeholder="e.g., 'Hey! Share this with your friends and get $20 for each successful signup!'"
              value={data.promoterMessage}
              onChange={(e) => handleChange("promoterMessage", e.target.value)}
            />
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Follow-Up Strategy*</h4>

            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm text-gray-600">SMS</div>
            </div>

            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-sm text-gray-600">Wait 5 days</div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Action Type</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="promoterActionType"
                      value="Email"
                      checked={data.promoterFollowUp.type === "Email"}
                      onChange={() => handleNestedChange("promoterFollowUp", "type", "Email")}
                    />
                    <span className="ml-2 text-sm text-gray-700">Email</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="promoterActionType"
                      value="SMS"
                      checked={data.promoterFollowUp.type === "SMS"}
                      onChange={() => handleNestedChange("promoterFollowUp", "type", "SMS")}
                    />
                    <span className="ml-2 text-sm text-gray-700">SMS</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="promoterActionType"
                      value="Wait"
                      checked={data.promoterFollowUp.type === "Wait"}
                      onChange={() => handleNestedChange("promoterFollowUp", "type", "Wait")}
                    />
                    <span className="ml-2 text-sm text-gray-700">Wait Duration</span>
                  </label>
                </div>
              </div>

              <Select label="Phone Number" id="promoterPhone" options={phoneOptions} value="1" />

              <Textarea
                label="Follow-Up Message"
                id="promoterFollowUpMessage"
                placeholder="Enter message..."
                value={data.promoterFollowUp.message}
                onChange={(e) => handleNestedChange("promoterFollowUp", "message", e.target.value)}
              />

              <Button variant="secondary" className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Action
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Leads Settings</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Reward Type*"
              id="leadsRewardType"
              options={rewardTypeOptions}
              value={data.leadsRewardType}
              onChange={(value) => handleChange("leadsRewardType", value)}
            />

            <Input
              label="Reward Value*"
              id="leadsRewardValue"
              placeholder="e.g., 20%"
              value={data.leadsRewardValue}
              onChange={(e) => handleChange("leadsRewardValue", e.target.value)}
            />
          </div>

          <div className="mt-4">
            <Textarea
              label="Referred Message*"
              id="referredMessage"
              placeholder="e.g., 'You've been invited! Sign up now and get 15% off your first order.'"
              value={data.referredMessage}
              onChange={(e) => handleChange("referredMessage", e.target.value)}
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Form Fields *</label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={data.formFields.fullName}
                  onChange={(e) => handleNestedChange("formFields", "fullName", e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Full Name</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={data.formFields.emailAddress}
                  onChange={(e) => handleNestedChange("formFields", "emailAddress", e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Email Address</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={data.formFields.phoneNumber}
                  onChange={(e) => handleNestedChange("formFields", "phoneNumber", e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Phone Number</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                  checked={data.formFields.agree}
                  onChange={(e) => handleNestedChange("formFields", "agree", e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">Agree</span>
              </label>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Follow-Up Strategy*</h4>

            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm text-gray-600">SMS</div>
            </div>

            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-sm text-gray-600">Wait 5 days</div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Action Type</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="leadsActionType"
                      value="Email"
                      checked={data.leadsFollowUp.type === "Email"}
                      onChange={() => handleNestedChange("leadsFollowUp", "type", "Email")}
                    />
                    <span className="ml-2 text-sm text-gray-700">Email</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="leadsActionType"
                      value="SMS"
                      checked={data.leadsFollowUp.type === "SMS"}
                      onChange={() => handleNestedChange("leadsFollowUp", "type", "SMS")}
                    />
                    <span className="ml-2 text-sm text-gray-700">SMS</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      name="leadsActionType"
                      value="Wait"
                      checked={data.leadsFollowUp.type === "Wait"}
                      onChange={() => handleNestedChange("leadsFollowUp", "type", "Wait")}
                    />
                    <span className="ml-2 text-sm text-gray-700">Wait Duration</span>
                  </label>
                </div>
              </div>

              <Select label="Phone Number" id="leadsPhone" options={phoneOptions} value="1" />

              <Textarea
                label="Follow-Up Message"
                id="leadsFollowUpMessage"
                placeholder="Enter message..."
                value={data.leadsFollowUp.message}
                onChange={(e) => handleNestedChange("leadsFollowUp", "message", e.target.value)}
              />

              <Button variant="secondary" className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Action
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button onClick={() => { onNext(), localStorage.setItem("PlatformSetup", "completed"), navigate("/aibot") }} variant={isLastStep ? "success" : "primary"} className="w-full">
          {isLastStep ? "Launch" : "Next"}
        </Button>
      </div>
    </div>
  )
}
