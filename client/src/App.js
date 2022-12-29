import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Randevu from './components/Randevu.js'
import Contact from './components/Contact.js'
import Home from './pages/Home';
import Iletisim from './pages/iletisim';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import Epilasyon from './pages/Epilasyon'
import CiltBakim from './pages/CiltBakim';
import Zayiflama from './pages/Zayiflama';
import Galeri from './pages/Galeri';





function App() {
  return (
    
    
    <>
      
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<Aboutus/>} />
            <Route path='/epilasyon' element={<Epilasyon/> } />
            <Route path='/ciltbakim' element={<CiltBakim/> } />
            <Route path='/zayiflama' element={<Zayiflama/> } />
            <Route path='/iletisim' element={<Iletisim/> } />
            <Route path='/randevu' element={<Randevu/> } />
            <Route path='/galeri' element={<Galeri/> } />
          </Routes>
        <Contact/>
        <Footer/> 
        
    </>
    
    
  );
}

export default App;
