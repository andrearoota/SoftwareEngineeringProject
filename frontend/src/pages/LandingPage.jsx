import React from "react";
import { Link } from "react-router-dom";
import classes from './LandingPage.module.css';
import '../index.css';
import Hero from "../components/Hero";
import Header from "../components/Header";
import Services from "../components/Services";

// LandingPage
// E' una pagina statica contenente la presentazione del servizio
// Contiene links alla pagina di login e di registrazione

class LandingPage extends React.Component{
    render(){
        return(
            <div className={classes.gradient} >
                <div className='navbar'>
                   <Header />
                </div>
                <div>
                <Hero />
                <Services />
                </div>
            
            
                  
            </div>
        );
    }
}

export default LandingPage;