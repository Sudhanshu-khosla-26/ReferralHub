import { Users, DollarSign, Calendar } from "lucide-react"

export function PayoutStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <Users className="w-5 h-5 text-gray-700" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Points Given</p>
          <p className="text-2xl font-bold">12,500</p>
        </div>
      </div>

      <div className="bg-orange-50 rounded-lg p-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
          <DollarSign className="w-5 h-5 text-orange-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Current Point Balance</p>
          <p className="text-2xl font-bold">1,250</p>
        </div>
      </div>

      <div className="bg-pink-50 rounded-lg p-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-pink-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Last Points Transfer</p>
          <p className="text-2xl font-bold">April 9, 2025</p>
        </div>
      </div>
    </div>
  )
}
