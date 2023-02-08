import React from 'react';
import "./Hero.css"
import { AiOutlineStock } from "react-icons/ai";
import myImage from '../images/MyImage.jpg'


class Hero extends React.Component{
    
    render(){
        return (
            <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>My Wallet</h1>
                        <p>My Wallet è una piattaforma per il trading algoritmico, ti permette di gestire il tuo portafoglio in modo auutomatico.
                            Il software ti suggerirà se investire o vendere in base all' andamento del mercato e potrai approvare le transazioni
                            con un semplice click.
                        </p>
                        
                    </div>


                    <div className="right-side">
                    <img src={myImage} style={{"border-radius": "1rem"}}>
                    </img>
                    </div>

                </div>

            </div>
        </section>
        );
    }
}

export default Hero;