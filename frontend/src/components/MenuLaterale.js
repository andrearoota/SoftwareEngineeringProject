import React from "react";
import { Link } from "react-router-dom";
import classi from './MenuLaterale.module.css';

class MenuLaterale extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className={classi.hamb}>
            <Link to='/analytics' replace={true} onClick={this.props.onClick}>Analytics</Link><br />
            <Link to='/money' replace={true} onClick={this.props.onClick}>Gestisci i tuoi soldi</Link><br />
            <Link to='/notifications' replace={true} onClick={this.props.onClick}>Notifiche</Link><br />
            <Link to='/settings' replace={true} onClick={this.props.onClick}>Impostazioni</Link>
        </div>;
    }
}

export default MenuLaterale;