import React from "react";
import { Link, Navigate } from "react-router-dom";
import classes from './LoginPage.module.css';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="navbar">
                    <Link to="/sign-in"><button className="navigation">Non hai un account? Registrati</button></Link>
                </div>
                <form id="login" onSubmit={this.props.onLogin} className={classes.spotlight}>
                    Username<br />
                    <input type="text" id="user" required/>
                    <br />Password<br />
                    <input type="password" id="pw" required/>
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