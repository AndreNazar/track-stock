import { Outlet } from "react-router"
import Sidebar from "./sidebar/Sidebar"
import './dashboard-layout.scss'

function DashboardLayout() {

    return (
        <div className="dashboard">
            <Sidebar/>
            <main className="dashboard__main">
                <Outlet/>
            </main>
        </div>
    )
}

export default DashboardLayout