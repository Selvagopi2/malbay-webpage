import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookSquare, faTwitterSquare, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

// import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <footer className="bg-dark-text-light">
    
         <div className="container">
         <div className="row footer-first-container">
         <div className="col-12 col-md-4 mb-3 para">
            <h2  className='logoname'>Malbay Express</h2>
            <p>Malbay Express offers dependable, secure, and cost-effective MVP Private Car journeys from Singapore to Johor Bahru, Legoland Malaysia, and various other destinations within Malaysia.</p>
        </div>

     <div className="col-12 col-md-4 mb-3">
             <a href="/Home">
                <p>HOME</p>
            </a>
            <a href="/About">
                <p>ABOUT</p>
            </a>
            <a href="/Serivces">
                <p>SERVICES</p>
            </a>
            <a href="/Locations">
                <p>LOCATIONS</p>
            </a> 
            <a href="/Fleets">
                <p>FLEETS</p>
            </a>
            <a href="/Pricing">
                <p>PRICING</p>
            </a>
            <a href="/Contact">
                <p>CONTACT</p>
            </a>
        </div>

        <div className="sb_footer-links_div">
             <p><FontAwesomeIcon icon={faPhone} className="me-2" />  +(91)6369487527 </p><br/>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> 22,Teachers colony, <br/> Tirunelveli,<br/> TamilNadu-628810,<br/></p><br/>
              <p><FontAwesomeIcon icon={faEnvelope } className="me-2"/>  flynewtours@gmail.com<br/></p>
        </div>
             </div>

             <div className="text-center"><br/>
                <p>@{new Date().getFullYear()} CopyRights&copy.Developed by DigiSailor.</p>
            </div>

    </div>
   
    </footer>
  );
}

export default Footer;



