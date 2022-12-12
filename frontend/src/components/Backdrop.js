import React from "react";
import classi from './MenuLaterale.module.css';

// Backdrop
// Renderizza un container nero semitrasparente che oscura la pagina sottostante quando viene aperto il menu laterale
// Argomenti:
// - onClick funzione che gestisca il click del container

class Backdrop extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className={classi.backdrop} onClick={this.props.onClick} />
    }
}

export default Backdrop;