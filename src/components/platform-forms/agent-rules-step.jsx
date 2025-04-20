"use client"
import Button from "../ui/button.jsx"
import Select from "../ui/select.jsx"
import Toggle from "../ui/toggle.jsx"

export default function AgentRulesStep({ data, setData, onNext }) {
  const handleChange = (field, value) => {
    setData({ ...data, [field]: value })
    localStorage.setItem("agentrules", JSON.stringify({ ...data, [field]: value }))
  }

  const toneOptions = [
    { value: "friendly", label: "Friendly" },
    { value: "professional", label: "Professional" },
    { value: "motivational", label: "Motivational" },
    { value: "casual", label: "Casual" },
  ]

  const styleOptions = [
    { value: "concise", label: "Concise" },
    { value: "detailed", label: "Detailed" },
    { value: "step-by-step", label: "Step-by-step" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Set Up AI Agent Rules</h2>
      </div>

      <div className="space-y-6">
        <Select
          label="Tone of Communication"
          id="toneOfCommunication"
          placeholder="Select"
          options={toneOptions}
          value={data.toneOfCommunication}
          onChange={(value) => handleChange("toneOfCommunication", value)}
        />

        <Select
          label="Response Style"
          id="responseStyle"
          placeholder="Select"
          options={styleOptions}
          value={data.responseStyle}
          onChange={(value) => handleChange("responseStyle", value)}
        />

        <Toggle
          label="Auto-offer help"
          description="AI pops up suggestions automatically when user lands on a page."
          checked={data.autoOfferHelp}
          onChange={(value) => handleChange("autoOfferHelp", value)}
          className="mt-6"
        />

        <Toggle
          label="User-initiated only"
          description="AI only responds when clicked or messaged."
          checked={data.userInitiatedOnly}
          onChange={(value) => handleChange("userInitiatedOnly", value)}
          className="mt-6"
        />
      </div>

      <div className="pt-4">
        <Button onClick={onNext} className="w-full">
          Next
        </Button>
      </div>
    </div>
  )
}
