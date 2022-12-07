import React from "react";
import { Link } from "react-router-dom";
import classi from './MenuLaterale.module.css';

class MenuLaterale extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className={classi.hamb}>
            <Link to='/app/analytics' replace={true} onClick={this.props.onClick}>Analytics</Link><br />
            <Link to='/app/money' replace={true} onClick={this.props.onClick}>Gestisci i tuoi soldi</Link><br />
            <Link to='/app/notifications' replace={true} onClick={this.props.onClick}>Notifiche</Link><br />
            <Link to='/app/settings' replace={true} onClick={this.props.onClick}>Impostazioni</Link>
        </div>;
    }
}

export default MenuLaterale;