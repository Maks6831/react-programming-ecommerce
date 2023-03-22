import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Basket from './pages/Basket';
import NavbarSignup from './components/NavBarSignUp'




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/login' element={<NavbarSignup/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
