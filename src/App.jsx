import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Academics from './pages/admissions/Admissions';
import Services from './pages/services/Services';
import Admin from './pages/admin/Admin';
import Ict from './pages/ict/Ict';
import Registry from './pages/registry/Registry';
import Admissions from './pages/admissions/Admissions';

function App() {
  return (    
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/academics' element={<Academics/>} />   
          <Route path='/administration' element={<Admin/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/ict' element={<Ict/>} />
          <Route path='/admissions' element={<Admissions />} />
          <Route path='/registry' element={<Registry />} />
          <Route path='/contact' element={<Contacts />} />  
        </Routes>       
      </BrowserRouter>        
    </div>
  );
}

export default App;
