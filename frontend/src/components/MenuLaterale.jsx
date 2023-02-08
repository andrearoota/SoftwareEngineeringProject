import React from "react";
import { Link } from "react-router-dom";
import classi from './MenuLaterale.module.css';

// MenuLaterale
// Renderizza il menu laterale che viene mostrato in tutte le pagine interne dell' applicazione dopo aver fatto il login 
// Argomenti (props):
// - onClick una funzione che gestisca il click di un qualsiasi link del menu
//      !! il link gia naviga verso la nuova pagina, la funzione deve solo chiudere il menù o cose del genere

class MenuLaterale extends React.Component {

    render() {
        return (
            <div className={classi.hamb}>
                <Link to='/app/analytics' replace={true} onClick={this.props.onClick}>Analytics</Link><br />
                <Link to='/app/money' replace={true} onClick={this.props.onClick}>Gestione wallet</Link><br />
                <Link to='/app/notifications' replace={true} onClick={this.props.onClick}>Notifiche</Link><br />
                <Link to='/app/settings' replace={true} onClick={this.props.onClick}>Impostazioni</Link><br />
                <Link to='/app/approval' replace={true} onClick={this.props.onClick}>Approvazione utente</Link><br />
                <Link to='/app/sell' replace={true} onClick={this.props.onClick}>Vendi</Link><br />
                <Link to='/' replace={true} onClick={this.props.exit}>Logout</Link>
            </div>
        );
    }
}

export default MenuLaterale;