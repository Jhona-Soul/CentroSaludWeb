//Styles css
import './App.css';
//Depending
import { Routes, Route } from 'react-router-dom';
//Components
import { ContextProvaider } from "./components/context/Context"
import { Layout } from './components/Layout';
import { Footer } from './components/footer/Footer';
import { Contact } from './components/contact/Contact';import { Prominent } from './components/prominent/Prominent';
import { Home } from './components/home/Home';
import Doctors from './components/doctors/Doctors';

function App() {

  return (
    <ContextProvaider>

      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={<Home/>}/>
          <Route path='home/*' element={<Doctors/>}/>
          <Route path= "contact" element={<Contact/>}/>
          <Route path="prominent" element={<Prominent/>}/>
        </Route>
      </Routes>

      <Footer/>
    </ContextProvaider>
  )
}

export default App
