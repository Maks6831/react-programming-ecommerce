import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
// import oldHome from "./pages/oldHome";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Basket from "./pages/Basket";
import NavbarSignup from "./components/NavBarSignUp";
import Item from "./pages/Item";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* <Route path='/' element={<oldHome />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<NavbarSignup />} />
          <Route path="/products/:item" element={<Item />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
