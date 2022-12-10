import React from "react";
import { Link } from "react-router-dom";
import classes from './SigninPage.module.css';

// SigninPage
// Renderizza la pagina di registrazione, contenente il form apposito e un bottone per aprire il menu laterale
// Argomenti:
// - onSignin funzione che gestisca il submit da parte dell'utente del form suddetto

class SigninPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="navbar">
                    <Link to='/login'><button className="navigation">Già registrato? Accedi</button></Link>
                </div>
                <form id="sign-in" className={classes.spotlight} onSubmit={this.props.onSignin}>
                    Nome<br />
                    <input type="text" name="nome" required/>
                    <br />Cognome<br />
                    <input type="text" name="cognome" required/>
                    <br />Email<br />
                    <input type="text" name="mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                    <br />Password<br />
                    <input type="password" name="pw" required pattern="^[A-Za-z0-9]{8,20}$"/>
                    <br />Conferma la password<br />
                    <input type="password" name="pw2" required/>
                    <br />
                    <input type="checkbox" required /> Selezionando questa spunta accetti
                    <a href='https://www.youtube.com/watch?v=ufwPb3WJ1Og'> i termini e le condizioni del servizio</a>
                    <br />
                    <button type="submit" className={classes.go}>Registrati</button>
                </form>
            </div>
        );
    }
}

export default SigninPage;