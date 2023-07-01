//Dependings
import { useContext } from "react";
import Style from "./ListDoctors.module.css";

//Components
import { DoctorsContext } from "../../context/DoctorsContext"
import { FlechaDerecha } from "../../icons/Icons"
import { Link } from "react-router-dom";

export const ListDoctors = ()=>{
    const { doctors, addToProminent,removeFromProminent, prominent } = useContext(DoctorsContext);
    const checkDoctorsInProminent = doctor => {
        return prominent.some(item => item.id === doctor.id)
    }
    
    return (
        <>
            <h4>Lista de Doctores</h4>
            <ul>
                {doctors.map((doctor) => {
                    const isDoctorsInProminent = checkDoctorsInProminent(doctor);

                    return (
                        <li key={doctor.id}>
                            <div>
                                <h2><strong>Nombre: </strong>{doctor.name}</h2>    
                                <h3><strong>User: </strong> {doctor.username}</h3>    
                                <nav>
                                    <Link to={`/home/${doctor.id}`}>Visitar perfil<FlechaDerecha/></Link>
                                    
                                    <button 
                                    className={isDoctorsInProminent ? Style.button_inactive : Style.button_active }
                                    onClick={()=> {
                                        isDoctorsInProminent 
                                        ? removeFromProminent(doctor)
                                        : addToProminent(doctor)
                                    }}>
                                        Agregar favorito 
                                    </button>    
                                </nav>        
                            </div>    
                        </li>
                    )
                })}
            </ul>
        </>
    )
} 