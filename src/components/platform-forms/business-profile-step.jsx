import Input from "../ui/input.jsx"
import Select from "../ui/select.jsx"
import Textarea from "../ui/textarea.jsx"
import Button from "../ui/button.jsx"

export default function BusinessProfileStep({ data, setData, onNext }) {
  const handleChange = (field, value) => {
    setData({ ...data, [field]: value })
    localStorage.setItem("businessprofile", JSON.stringify({ ...data, [field]: value }))
  }


  const industries = [
    { value: "E-commerce", label: "E-commerce" },
    { value: "SaaS/Software", label: "SaaS/Software" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Fitness & Wellness", label: "Fitness & Wellness" },
  ]

  const companySizes = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-500", label: "201-500 employees" },
    { value: "501+", label: "501+ employees" },
  ]

  const cities = [
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
  ]

  const states = [
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
  ]

  const isFormValid = data?.name && data?.email

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Build Your Business Identity</h2>
        <p className="mt-1 text-sm text-gray-500">
          Help us tailor the referral experience by adding key details about your business
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Logo</label>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Choose Image
          </button>
        </div>

        <Textarea
          label="Business Description"
          id="description"
          placeholder="Enter business description..."
          value={data.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Business Name"
            id="name"
            placeholder="Enter business name"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />

          <Input
            label="Business Email"
            id="email"
            type="email"
            placeholder="e.g., robert.fox@myemail.com"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <Input
            label="Business Phone No."
            id="phone"
            placeholder="Enter phone no."
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <Select
            label="Industry"
            id="industry"
            placeholder="Select"
            options={industries}
            value={data.industry}
            onChange={(value) => handleChange("industry", value)}
          />

          <Input
            label="Services"
            id="services"
            placeholder="Enter services..."
            value={data.services}
            onChange={(e) => handleChange("services", e.target.value)}
          />

          <Input
            label="Products"
            id="products"
            placeholder="Enter products..."
            value={data.products}
            onChange={(e) => handleChange("products", e.target.value)}
          />

          <Select
            label="Company Size"
            id="companySize"
            placeholder="Select"
            options={companySizes}
            value={data.companySize}
            onChange={(value) => handleChange("companySize", value)}
          />

          <Select
            label="City"
            id="city"
            placeholder="Select"
            options={cities}
            value={data.city}
            onChange={(value) => handleChange("city", value)}
          />

          <Select
            label="State"
            id="state"
            placeholder="Select"
            options={states}
            value={data.state}
            onChange={(value) => handleChange("state", value)}
          />

          <Input
            label="Zip Code"
            id="zipCode"
            placeholder="Enter zip code"
            value={data.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
          />
        </div>
      </div>

      <div className="pt-4">
        <Button onClick={onNext} disabled={!isFormValid} className="w-full">
          Next
        </Button>
      </div>
    </div>
  )
}
