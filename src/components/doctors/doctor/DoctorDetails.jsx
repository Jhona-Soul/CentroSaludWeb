//Dependings
import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function DoctorDetails() {
    const [doctor, setDoctor] = useState(null)
    const { doctorId } = useParams();

    console.log(doctorId);
    const URL_API_USER = `https://jsonplaceholder.typicode.com/users/${doctorId}`

    async function ApiUser () {
        try {
            const response = await fetch(URL_API_USER)
            setDoctor(await response.json());
        } catch (error) {
            console.log("Failed to", error);
        }
    }
    useEffect(() => {
        ApiUser();
    },[doctorId])

    console.log(doctor);

  return (
    <>
        {!doctor && <em>Cargando...</em>}
        {doctor && (
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
                        <li><Link to="/home">Regresar a la Lista...</Link></li>
                    </ul>
                </div>
            </>
        )}
    </>
  )
}
