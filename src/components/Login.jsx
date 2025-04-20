import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [magicemail, setMagicEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [loginMethod, setLoginMethod] = useState("email") // 'email' or 'magic'
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isMagicLoading, setIsMagicLoading] = useState(false)
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("User"))
    const platform = (localStorage.getItem("PlatformSetup")) || null

    useEffect(() => {
        if (user) {
            if (platform === "completed") {
                navigate("/")
            }
            else {
                navigate("/platform")
            }
        }
    }, [])


    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {

            // Handle login logic here
            setIsLoading(false);
            console.log("Login with:", { email, password, rememberMe });
            localStorage.setItem("User", JSON.stringify({ email, password }))
            navigate("/platform")
        }, 1500)
    }

    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`)
        // Implement social login logic
    }

    const handleMagicLink = (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsMagicLoading(false)
            // Handle magic link logic here
            console.log("Magic link sent to:", email)
        }, 1500)
    }


    return (
        <div className='bg-[#F5F7FA]'>
            <div className="absolute inset-0 overflow-hidden">
                <img className="fixed top-[10vh] left-0 scale-x-100 scale-y-70" src="/assets/curve01.svg" alt="Curve 1" />
                <img className="fixed top-[40vh]  right-[0vw] scale-x-100 scale-y-70" src="/assets/curve02.svg" alt="Curve 2" />
            </div>

            <div className="relative z-10 ">
                <div className="min-h-screen  flex flex-col items-center justify-center  p-4 ">
                    <h1 className="text-2xl font-medium text-[#4D4D4D]">Login to ReferralHub</h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full mt-6 max-w-md bg-white rounded-xl shadow-xl overflow-hidden  "
                    >
                        <div className="p-8 pt-8 pb-4">

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSocialLogin("google")}
                                className="w-full py-2 px-8 mb-4 bg-white hover:bg-gray-50 text-[#305AFF]  font-medium border border-[#305AFF] rounded-lg transition-all duration-300 flex items-center justify-center"
                            >

                                Continue with Google/Microsoft
                            </motion.button>


                            <motion.form
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleMagicLink}
                            >
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Magic Link Login</h3>
                                    <input
                                        type="email"
                                        value={magicemail}
                                        onChange={(e) => setMagicEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isMagicLoading}
                                    className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 from-15%  to-[#B5D2FF]  hover:from-60% hover:to-[#B5D2FF] text-white rounded-lg transition-all duration-300 flex items-center justify-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                                >
                                    {isMagicLoading ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        "Send Magic Link"
                                    )}
                                </motion.button>

                            </motion.form>

                            <div className="relative flex items-center justify-center my-6">
                                <div className="border-t border-gray-300 absolute w-full"></div>
                                <div className="bg-white px-4 relative text-sm text-gray-500">or</div>
                            </div>

                            <motion.form
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleLogin}
                            >
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
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

                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <Link href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={() => setRememberMe(!rememberMe)}
                                            className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 from-15%  to-[#B5D2FF]  hover:from-60% hover:to-[#B5D2FF] text-white rounded-lg transition-all duration-300 flex items-center justify-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                                >
                                    {isLoading ? (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        "Login"
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

                        <div className="pb-4 text-center bg-gray-50">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link to="/register" className="font-medium text-blue-500 hover:text-blue-700">
                                    Register now
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Login
