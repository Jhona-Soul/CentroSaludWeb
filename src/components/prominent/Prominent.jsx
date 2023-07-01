import { useContext } from "react"
import { DoctorsContext } from "../context/DoctorsContext"

function ProminentDetail (doctor) {
    return (
        <>
            <h2>{doctor.name}</h2>
                <div>
                    <img src="" alt="" />
                    <ul>
                        <li><strong>Nombre: </strong>{doctor.username}</li>
                        <li><strong>Correo: </strong>{doctor.email}</li>
                        <li><strong>Localizacion: </strong>{doctor.address.city}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><strong>Telefono: </strong>{doctor.phone}</li>
                    </ul>
                </div>
        </>
    )
}


export const Prominent = ()=>{
    const {  prominent, clearProminent } = useContext(DoctorsContext)
    return (
        <>
          <h2>Lista de Favoritos ✨</h2>
          <aside>
            <ul>
                {prominent.map(doctor => (
                    <ProminentDetail 
                        key={doctor.id}
                        { ...doctor}
                    />
                ))}
            </ul>
            <button onClick={clearProminent}>
                Eliminar a todos los Favoritos ☠️
            </button>
            </aside>  
        </>
    )
} 