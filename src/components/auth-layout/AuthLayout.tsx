import { Outlet } from "react-router"
import Header from "./header/Header"
import './auth-layout.scss'

function AuthLayout() {

    return (
        <div className="auth">
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default AuthLayout