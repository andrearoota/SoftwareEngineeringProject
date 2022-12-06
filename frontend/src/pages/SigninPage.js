import React from "react";
import { Link } from "react-router-dom";
import classes from './SigninPage.module.css';

class SigninPage extends React.Component{
    render(){
        return(
            <div>
                <div className="navbar">
                    <Link to='/login'><button className="navigation">Già registrato? Accedi</button></Link>
                </div>
                <form id="sign-in" className={classes.spotlight}>
                    Nome<br />
                    <input type="text" id="nome" required/>
                    <br />Cognome<br />
                    <input type="text" id="cognome" required/>
                    <br />Codice fiscale<br />
                    <input type="text" id="cf" required/>
                    <br />Password<br />
                    <input type="password" id="pw" required/>
                    <br />Conferma la password<br />
                    <input type="password" id="pw2" required/>
                    <br />
                    <input type="checkbox" id="x" required /> Selezionando questa spunta accetti
                    <a href='https://www.youtube.com/watch?v=ufwPb3WJ1Og'> i termini e le condizioni del servizio</a>
                    <br />
                    <button type="submit" className={classes.go}>Registrati</button>
                </form>
            </div>
        );
    }
}

export default SigninPage;