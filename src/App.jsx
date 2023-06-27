//Styles css
import './App.css';
//Depending
import { Routes, Route } from 'react-router-dom';
//Components
import { ContextProvaider } from "./components/context/Context"
import { Layout } from './components/Layout';
import { Footer } from './components/footer/Footer';
import { Contact } from './components/contact/Contact';
import { ListDoctors } from './components/doctors/listDoctors/ListDoctors';
import { Prominent } from './components/prominent/Prominent';
import { DoctorCard } from './components/doctors/doctor/DoctorCard';

function App() {

  return (
    <ContextProvaider>
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route path='/home' element={<ListDoctors/>}/>
            <Route path="/doctors/:id" element={<DoctorCard/>}/>
          <Route path= "/contact" element={<Contact/>}/>
          <Route path="/prominent" element={<Prominent/>}/>
        </Route>
      </Routes>
      <Footer/>
    </ContextProvaider>
  )
}

export default App
