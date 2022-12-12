import React from "react";
import { Link } from "react-router-dom";
import classes from './LoginPage.module.css';

// LoginPage
// Renderizza la pagina di login, contenente il form apposito e un bottone per aprire il menu laterale
// Argomenti:
// - onLogin funzione che gestisca il submit da parte dell'utente del form suddetto

class LoginPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onLogout();
        console.log('logout');
    }

    render(){
        return(
            <div>
                <div className="navbar">
                    <Link to="/sign-in"><button className="navigation">Non hai un account? Registrati</button></Link>
                </div>
                <form id="login" onSubmit={this.props.onLogin} className={classes.spotlight}>
                    Email<br />
                    <input type="email" name="email" required />
                    <br />Password<br />
                    <input type="password" name="password" required/>
                    <br /><button type="submit" className={classes.go}>Entra</button>
                    <div className={classes.fp}>
                        <a onClick={ ()=>{return alert("Cazzi tuoi")} } >Password dimenticata?</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;