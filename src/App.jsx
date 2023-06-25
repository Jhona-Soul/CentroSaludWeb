//Styles css
import './App.css';
//Dependencias
import { Routes, Route } from 'react-router-dom';
//Components
import { ContextProvaider } from "./components/context/Context"
import { Layout } from './components/Layout';
import { Footer } from './components/footer/Footer';
import { Contact } from './components/contact/Contact';
import { ListDoctors } from './components/doctors/listDoctors/ListDoctors';

function App() {

  return (
    <ContextProvaider>
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route path='/home' element={<ListDoctors/>}/>
            <Route path="/doctors/:id" element={}/>
          <Route path= "/contact" element={<Contact/>}/>
          <Route path="/prominent" element={}/>
        </Route>
      </Routes>
      <Footer/>
    </ContextProvaider>
  )
}

export default App
