//Dependings
import { useContext } from "react"
import { Context } from "../../context/Context"

import { FlechaDerecha } from "../../icons/Icons"
import { Link } from "react-router-dom";

export const ListDoctors = ()=>{
    const { doctors } = useContext(Context);
    console.log(doctors);
    return (
        <>
            <h4>Lista de Doctores</h4>
            <ul>
                {doctors.map(({id, name,username }) => {
                    return (
                        <li key={id}>
                            <div>
                                <h2><strong>Nombre: </strong>{name}</h2>    
                                <h3><strong>User: </strong> {username}</h3>    
                                <nav>
                                    <Link to={`/home/${id}`}>Visitar perfil<FlechaDerecha/> </Link>    
                                    <button>Agregar favorito </button>    
                                </nav>        
                            </div>    
                        </li>
                    )
                })}
            </ul>
        </>
    )
} 