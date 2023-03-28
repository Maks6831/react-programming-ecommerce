import React, { useEffect } from "react";
import "../styles/Home.css";
import "../styles/oldHome.css";
import { Link } from "react-router-dom";
import Achero from "../components/Achero";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
  useEffect(()=>{
    AOS.init({duration:2000});


  },[])
  return (
    <div>
      <Achero />
      
      <div className="buttonContainer">
        <Link to="/products" className="productButton" data-aos="fade-right">
          Discover our Products
        </Link>
      </div>
      <section className="about">
      <div className="about-section">
        <div className="about-title" data-aos="fade-right">
        <h2>What we are about</h2>
        </div>
       
        
        <p className="about-description" data-aos="fade-left">
          At ByteBazaar, we offer a wide range of high-quality equipment and
          accessories from top brands for your coding needs. Our e-commerce
          platform provides a secure and convenient shopping experience, and our
          customer support team is always available to assist you. Join our
          community today and elevate your coding setup!
        </p>
      </div>
      </section>

      <div className="kitSection">
        <h3>Checkout our kits</h3>
        <div className="optionsDiv">
          <Link to='/products' state={{level : 'Newbie'}} st className="card" data-aos="flip-left">
            <div className=" kitCard newbie"></div>
            <div className="kitTitle">Newbie Kit</div>
          </Link>
          <Link to='/products' state={{level : 'Ninja'}} st className="card" data-aos="flip-left">
            <div className=" kitCard ninja"></div>
            <div className="kitTitle">Ninja Kit</div>
          </Link>
          <Link to='/products' state={{level : 'Master'}} st className="card" data-aos="flip-left">
            <div className=" kitCard master"></div>
            <div className="kitTitle">Master Kit</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
