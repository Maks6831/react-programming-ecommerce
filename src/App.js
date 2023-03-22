import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Basket from './pages/Basket';




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

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
