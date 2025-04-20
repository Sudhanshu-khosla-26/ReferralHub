

export default function Header({ title }) {
    const user = JSON.parse(localStorage.getItem("User"))

    return (
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <div className="h-6 w-6 bg-red-50 rounded-full flex items-center justify-center">
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            1
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-red-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="h-8 w-8 bg-gray-200 rounded-full mr-2">
                        <img src="/assets/profile.svg" alt="" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-700">Kadin Stanton</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}
