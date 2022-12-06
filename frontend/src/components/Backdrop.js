import React from "react";
import classi from './MenuLaterale.module.css';

class Backdrop extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className={classi.backdrop} onClick={this.props.onClick} />
    }
}

export default Backdrop;