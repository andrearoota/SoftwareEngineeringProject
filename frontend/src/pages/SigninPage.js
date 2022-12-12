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
                    Nome e Cognome<br />
                    <input type="text" name="nome" required maxLength='255'/>
                    <br />Email<br />
                    <input type="email" name="email" required maxLength='255'/>
                    <br />Password<br />
                    <input type="password" name="password" required pattern=".{6,}" maxLength='255'/>
                    <br />Conferma la password<br />
                    <input type="password" name="password2" required pattern=".{6,}" maxLength='255'/>
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