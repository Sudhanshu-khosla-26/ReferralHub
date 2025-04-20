import { useState } from "react"
import { Pencil } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function UserProfile() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: "Kadin Stanton",
    phone: "1234567890",
    email: "kadinstanton@gmail.com",
    password: "********",
  })

  const [isEditing, setIsEditing] = useState({
    name: false,
    phone: false,
    email: false,
  })

  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }))
  }

  const handleSave = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }))
    setIsEditing((prev) => ({ ...prev, [field]: false }))
  }

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium text-gray-800">Profile</h2>
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <img src="/assets/profile.svg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-full transition-colors">
            <img src="/edit.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* User Name */}
        <div className="border-b pb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-600">User Name</label>
            {!isEditing.name && (
              <button onClick={() => handleEdit("name")} className="text-blue-500 hover:text-blue-600 p-1">
                <img src="/edit.svg" alt="" />
              </button>
            )}
          </div>
          {isEditing.name ? (
            <div className="flex items-center">
              <input
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
              <button
                onClick={() => handleSave("name", userData.name)}
                className="ml-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="text-lg">{userData.name}</div>
          )}
        </div>

        {/* User Phone */}
        <div className="border-b pb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-600">User Phone</label>
            {/* {!isEditing.phone && (
              <button onClick={() => handleEdit("phone")} className="text-blue-500 hover:text-blue-600 p-1">
                <img src="/edit.svg" alt="" />
              </button>
            )} */}
          </div>
          {isEditing.phone ? (
            <div className="flex items-center">
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
              <button
                onClick={() => handleSave("phone", userData.phone)}
                className="ml-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="text-lg">{userData.phone}</div>
          )}
        </div>

        {/* Email */}
        <div className="border-b pb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-600">Email</label>
            {/* {!isEditing.email && (
              <button onClick={() => handleEdit("email")} className="text-blue-500 hover:text-blue-600 p-1">
                <img src="/edit.svg" alt="" />
              </button>
            )} */}
          </div>
          {isEditing.email ? (
            <div className="flex items-center">
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="border rounded px-3 py-2 w-full"
              />
              <button
                onClick={() => handleSave("email", userData.email)}
                className="ml-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="text-lg">{userData.email}</div>
          )}
        </div>

        {/* Password */}
        <div className="border-b pb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm text-gray-600">Password</label>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg">{userData.password}</div>
            <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition-colors">
              Change Password
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-4">
          <button className="border border-red-500 text-red-500 px-6 py-3 rounded-md hover:bg-red-50 transition-colors">
            Delete Account
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("User");
              navigate("/login");
            }}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
