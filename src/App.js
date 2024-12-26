import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Technic from './components/Technic';
import Expa from './components/Expa';
import Sgd from './components/Sgd';
import Geological from './components/Geological';
import Marine from './components/Marine';
import Popup from './components/Popup';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/popup" element={<Popup/>}/>
        <Route path="/services" element={<Services/>} />  
        <Route path="/technic" element={<Technic/>} />
        <Route path="/experience" element={<Expa/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/services/geological" element={<Geological/>} />
        <Route path="/services/sgd" element={<Sgd/>} />
        <Route path="/services/marine" element={<Marine/>} />
      </Routes>
      <Footer/>      
      </HashRouter>
    </div>
  );
}

export default App;