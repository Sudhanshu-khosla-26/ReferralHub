"use client"

import { useState } from "react"

export default function BusinessProfile() {
  const [businessData, setBusinessData] = useState(JSON.parse(localStorage.getItem("businessprofile") || {
    logo: null,
    description: "",
    name: "",
    email: "",
    phone: "",
    industry: "",
    services: "",
    products: "",
    companySize: "",
    city: "",
    state: "",
    zipCode: "",
  }))

  const handleChange = (e) => {
    const { name, value } = e.target
    setBusinessData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Save business profile data
    console.log("Business profile data:", businessData)
    // Show success message
    localStorage.setItem("businessprofile", JSON.stringify(businessData))
    alert("Business profile saved successfully!")
  }

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Logo */}
        <div>
          <label className="block text-gray-700 mb-2">Business Logo</label>
          <button type="button" className="px-4 py-2 border rounded hover:bg-gray-50 transition-colors">
            Choose Image
          </button>
        </div>

        {/* Business Description */}
        <div>
          <label htmlFor="description" className="block text-gray-700 mb-2">
            Business Description
          </label>
          <textarea
            id="description"
            name="description"
            value={businessData.description}
            onChange={handleChange}
            placeholder="Enter description..."
            className="w-full border rounded-md px-3 py-2 min-h-[120px]"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={businessData.name}
              onChange={handleChange}
              placeholder="Enter business name"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Business Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={businessData.email}
              onChange={handleChange}
              placeholder="e.g., robert.fox@myemail.com"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Business Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Business Phone No.
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={businessData.phone}
              onChange={handleChange}
              placeholder="Enter phone no."
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Industry */}
          <div>
            <label htmlFor="industry" className="block text-gray-700 mb-2">
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={businessData.industry}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="e-commerce">E-commerce</option>
              <option value="saas-software">SaaS/Software</option>
              <option value="healthcare">Healthcare</option>
              <option value="fitness-wellness">Fitness & Wellness</option>
            </select>
          </div>
          <div>
            <label htmlFor="services" className="block text-gray-700 mb-2">
              Services
            </label>
            <input
              type="text"
              id="services"
              name="services"
              value={businessData.services}
              onChange={handleChange}
              placeholder="Enter services..."
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Products */}
          <div>
            <label htmlFor="products" className="block text-gray-700 mb-2">
              Products
            </label>
            <input
              type="text"
              id="products"
              name="products"
              value={businessData.products}
              onChange={handleChange}
              placeholder="Enter products..."
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Company Size */}
          <div>
            <label htmlFor="companySize" className="block text-gray-700 mb-2">
              Company Size (Optional)
            </label>
            <select
              id="companySize"
              name="companySize"
              value={businessData.companySize}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 appearance-none bg-white"
            >
              <option value="">Select</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-gray-700 mb-2">
              City
            </label>
            <select
              id="city"
              name="city"
              value={businessData.city}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 appearance-none bg-white"
            >
              <option value="">Select</option>
              {[
                { value: "mumbai", label: "Mumbai" },
                { value: "delhi", label: "Delhi" },
                { value: "bangalore", label: "Bangalore" },
                { value: "hyderabad", label: "Hyderabad" },
                { value: "chennai", label: "Chennai" },
                { value: "kolkata", label: "Kolkata" },
                { value: "pune", label: "Pune" },
                { value: "jaipur", label: "Jaipur" },
                { value: "ahmedabad", label: "Ahmedabad" },
                { value: "lucknow", label: "Lucknow" },
              ].map((city) => (
                <option key={city.value} value={city.value}>
                  {city.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="state" className="block text-gray-700 mb-2">
              State
            </label>
            <select
              id="state"
              name="state"
              value={businessData.state}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 appearance-none bg-white"
            >
              <option value="">Select</option>
              {[
                { value: "ap", label: "Andhra Pradesh" },
                { value: "ar", label: "Arunachal Pradesh" },
                { value: "as", label: "Assam" },
                { value: "br", label: "Bihar" },
                { value: "ct", label: "Chhattisgarh" },
                { value: "dl", label: "Delhi" },
                { value: "ga", label: "Goa" },
                { value: "gj", label: "Gujarat" },
                { value: "hr", label: "Haryana" },
                { value: "hp", label: "Himachal Pradesh" },
                { value: "jh", label: "Jharkhand" },
                { value: "ka", label: "Karnataka" },
                { value: "kl", label: "Kerala" },
                { value: "mp", label: "Madhya Pradesh" },
                { value: "mh", label: "Maharashtra" },
                { value: "mn", label: "Manipur" },
                { value: "ml", label: "Meghalaya" },
                { value: "mz", label: "Mizoram" },
                { value: "nl", label: "Nagaland" },
                { value: "or", label: "Odisha" },
                { value: "pb", label: "Punjab" },
                { value: "rj", label: "Rajasthan" },
                { value: "sk", label: "Sikkim" },
                { value: "tn", label: "Tamil Nadu" },
                { value: "tg", label: "Telangana" },
                { value: "tr", label: "Tripura" },
                { value: "up", label: "Uttar Pradesh" },
                { value: "ut", label: "Uttarakhand" },
                { value: "wb", label: "West Bengal" },
              ].map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-gray-700 mb-2">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={businessData.zipCode}
              onChange={handleChange}
              placeholder="Enter zip code"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors transform hover:scale-105 duration-200"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
