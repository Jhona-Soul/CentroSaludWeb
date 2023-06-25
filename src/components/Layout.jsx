import { Outlet } from "react-router-dom"


export const Layout = () => {
    return (
        <div>
            
            <hr />
            <Outlet/>
        </div>
    )
}