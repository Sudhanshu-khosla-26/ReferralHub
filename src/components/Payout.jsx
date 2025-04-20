import React from 'react'
import Sidebar from './sidebar'
import Header from './header'
import Dashboard from './payout-components/dashboard'

const Payout = () => {
    return (
        <>
            <div className="flex h-screen bg-gray-50">
                <Sidebar />

                <div className="flex flex-1 flex-col overflow-hidden">
                    <Header title={"Manage and monitor your payouts"} />
                    <Dashboard />
                </div>
            </div>

        </>
    )
}

export default Payout
