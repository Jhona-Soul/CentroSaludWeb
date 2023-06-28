//Depending
import { Link } from "react-router-dom"
//Component
import { NavLink } from "./NavLink"


export const NavBar = ()=>{
    const URLS_NAV = [
        {
            id:"1",
            href:"/prominent",
            text:"Favoritos"
        },
        {
            id:"2",
            href:"/contact",
            text:"Contacto"
        },
        {
            id:"3",
            href:"/home",
            text:"Lista Doctores"
        }
    ]
    return (
        <nav >
                <div id="title">
                    <Link  to="/" > 
                        <h1 >Centro medico</h1>
                        <h1 ><b>Higía</b> </h1>
                    </Link>
                </div>
                <ul >
                    {
                        URLS_NAV.map(({id, href, text}) => {
                            return (
                                <li key={id}>
                                    <NavLink to={href}>{text}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
    )
} 