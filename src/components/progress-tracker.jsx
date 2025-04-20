import { motion } from "framer-motion"

export default function ProgressTracker({ steps, currentStep, completedSteps, onStepClick }) {
    return (
        <div className="space-y-4">
            {steps.map((step, index) => {
                const isCompleted = completedSteps.includes(index)
                const isActive = currentStep === index
                const isClickable = index <= Math.max(...completedSteps, 0) + 1

                return (
                    <div
                        key={step.id}
                        className={`flex items-start space-x-3 ${isClickable ? "cursor-pointer" : "opacity-70"}`}
                        onClick={() => isClickable && onStepClick(index)}
                    >
                        <div className="flex-shrink-0 mt-1">
                            {isCompleted ? (
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center"
                                >
                                    <svg
                                        className="h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </motion.div>
                            ) : isActive ? (
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    className="h-8 w-8 rounded-full bg-blue-500 border-2 border-blue-200 flex items-center justify-center"
                                >
                                    <div className="h-2 w-2 rounded-full bg-white"></div>
                                </motion.div>
                            ) : (
                                <div className="h-8 w-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                                </div>
                            )}
                        </div>

                        <div className="pt-1">
                            <h3
                                className={`font-medium ${isActive ? "text-blue-600" : isCompleted ? "text-green-600" : "text-gray-500"}`}
                            >
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {isCompleted ? "Completed" : isActive ? "In Progress" : "Not Started"}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
