import React from "react";
import { Link } from "react-router-dom";
import classes from './LandingPage.module.css';
import '../index.css';

// LandingPage
// E' una pagina statica contenente la presentazione del servizio
// Contiene links alla pagina di login e di registrazione

class LandingPage extends React.Component{
    render(){
        return(
            <div className={classes.gradient} >
                <div className='navbar'>
                    <Link to='/login'><button className='navigation'>Accedi</button></Link>
                    <Link to='/sign-in'><button className='navigation'>Registrati</button></Link>
                </div>
                <br />
                <p className={classes.title}>NomePortafoglio</p>
                <p className={classes.content}>
                    NomePortafoglio è un servizio utilissimo per fare non sappiamo cosa.
                    Sarà Camilla a spiegarlo per voi in questo spazio, ma non ora.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                </p>
                <img alt='Qua magari uno screenshot' />
            </div>
        );
    }
}

export default LandingPage;