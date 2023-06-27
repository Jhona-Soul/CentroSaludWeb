import { Outlet } from "react-router-dom"
import { NavBar } from "./nav/NavBar"

export const Layout = () => {
    return (
        <div>
            <NavBar/>
            <hr />
            <Outlet/>
        </div>
    )
}