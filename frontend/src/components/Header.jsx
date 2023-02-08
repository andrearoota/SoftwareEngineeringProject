import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";

class Header extends React.Component{
    
    render(){
        return (
            <header>
            <div className="btn-try">
            <Link to='/login'>
                <button >Accedi</button>
                </Link> 
            </div>
            <div className="btn-try">
            <Link to='/sign-in'>
                <button>
                Registrati
                </button>
            </Link>
            </div>
        </header>
        );
    }
}

export default Header;