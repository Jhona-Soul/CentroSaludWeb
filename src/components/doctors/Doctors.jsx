import { Route, Routes } from "react-router-dom"

import DoctorDetails from './doctor/DoctorDetails'
import { ListDoctors } from './listDoctors/ListDoctors'
import { ProminentProvider } from "../context/ProminentContext"

export default function Doctors() {
  return (
        <>
          <h4><strong>Doctors Page</strong></h4>
          <hr />
          <Routes>
              <Route index element={<ListDoctors/>} />
              <Route path=":doctorId" element={<DoctorDetails/>} />
          </Routes>
        </>
  )
}
