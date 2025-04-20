import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [passwordStrength, setPasswordStrength] = useState(0)
    const [passwordMatch, setPasswordMatch] = useState(true)

    const checkPasswordStrength = (pass) => {
        let strength = 0
        if (pass.length >= 8) strength += 1
        if (/[A-Z]/.test(pass)) strength += 1
        if (/[0-9]/.test(pass)) strength += 1
        if (/[^A-Za-z0-9]/.test(pass)) strength += 1
        setPasswordStrength(strength)
    }

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        checkPasswordStrength(newPassword)
        if (confirmPassword) {
            setPasswordMatch(newPassword === confirmPassword)
        }
    }

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value
        setConfirmPassword(newConfirmPassword)
        setPasswordMatch(password === newConfirmPassword)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setPasswordMatch(false)
            return
        }

        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            // Handle registration logic here
            console.log("Register with:", { email, password })
            localStorage.setItem("User", JSON.stringify({ email, password }))
            navigate("/platform")
        }, 1500)
    }

    const handleSocialLogin = (provider) => {
        console.log(`Register with ${provider}`)
        // Implement social login logic
    }


    return (

        <div className='bg-[#F5F7FA]'>
            <div className="absolute inset-0 overflow-hidden">
                <img className="fixed top-[10vh] left-0 scale-x-100 scale-y-70" src="/assets/curve01.svg" alt="Curve 1" />
                <img className="fixed top-[40vh]  right-[0vw] scale-x-100 scale-y-70" src="/assets/curve02.svg" alt="Curve 2" />
            </div>

            <div className="relative z-10 ">
                <div className="min-h-screen flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-medium text-[#4D4D4D]">Register for ReferralHub</h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full mt-6 max-w-md bg-white rounded-xl shadow-xl overflow-hidden"
                    >
                        <div className="p-8 pb-2">


                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                                onSubmit={handleRegister}
                            >
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Id
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="robert.fox@myemail.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Create Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={handlePasswordChange}
                                            placeholder="Enter password"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>

                                    {password && (
                                        <div className="mt-2">
                                            <div className="flex space-x-1 mb-1">
                                                {[...Array(4)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`h-1 flex-1 rounded-full ${i < passwordStrength
                                                            ? passwordStrength === 1
                                                                ? "bg-red-400"
                                                                : passwordStrength === 2
                                                                    ? "bg-yellow-400"
                                                                    : passwordStrength === 3
                                                                        ? "bg-green-400"
                                                                        : "bg-green-600"
                                                            : "bg-gray-200"
                                                            }`}
                                                    ></div>
                                                ))}
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                {passwordStrength === 0 && "Very weak password"}
                                                {passwordStrength === 1 && "Weak password"}
                                                {passwordStrength === 2 && "Medium password"}
                                                {passwordStrength === 3 && "Strong password"}
                                                {passwordStrength === 4 && "Very strong password"}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirm-password"
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                            placeholder="Re-enter password"
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${confirmPassword && !passwordMatch ? "border-red-500" : "border-gray-300"
                                                }`}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        >
                                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                    {confirmPassword && !passwordMatch && <p className="mt-1 text-sm text-red-500">Passwords do not match</p>}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isLoading || (confirmPassword && !passwordMatch)}
                                    className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 from-20%  to-[#B5D2FF]  hover:from-60% hover:to-[#B5D2FF] text-white rounded-lg transition-all duration-300 flex items-center justify-center ${isLoading || (confirmPassword && !passwordMatch) ? "opacity-70 cursor-not-allowed" : ""
                                        }`}
                                >
                                    {isLoading ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        "Register"
                                    )}
                                </motion.button>
                            </motion.form>

                            <div className="relative flex items-center justify-center my-6">
                                <div className="border-t border-gray-300 absolute w-full"></div>
                                <div className="bg-white px-4 relative text-sm text-gray-500">or</div>
                            </div>

                            <div className="flex justify-center space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleSocialLogin("google")}
                                    className="p-2 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                                >
                                    <img className='h-5 w-5' src="/assets/google.svg" alt="" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleSocialLogin("facebook")}
                                    className="p-2 rounded-full bg-white border border-gray-300 text-blue-600 hover:bg-gray-50"
                                >
                                    <img className='h-5 w-5' src="/assets/facebook.svg" alt="" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleSocialLogin("twitter")}
                                    className="p-2 rounded-full bg-white border border-gray-300 text-black hover:bg-gray-50"
                                >
                                    <img className='h-5 w-5' src="/assets/twitter.svg" alt="" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleSocialLogin("linkedin")}
                                    className="p-2 rounded-full bg-white border border-gray-300 text-blue-700 hover:bg-gray-50"
                                >
                                    <img className='h-5 w-5' src="/assets/linkedin.svg" alt="" />
                                </motion.button>
                            </div>
                        </div>

                        <div className="py-4 text-center bg-gray-50">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-blue-500 hover:text-blue-700">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Register
