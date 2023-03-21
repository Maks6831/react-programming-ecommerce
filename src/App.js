import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
