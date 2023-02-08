import React from 'react';
import "./Services.css"
import CardService from './CardService';
import softwareImage from '../images/software_icon.png'
import analyticsImage from '../images/analytics_icon.png'
import settingsImage from '../images/setting_icon.png'
const blocks= [
    {
        "id": 1,
        "title": "Software di trading",
        "description": "Un algoritmo innovativo di trading ti notifica quando è vantaggioso vendere o comprare",
        "icon": softwareImage
    },
    {
        "id": 2,
        "title": "Analytics",
        "description": "Puoi vedere la situazione del tuo portafoglio, dove sono allocati i tuoi assets",
        "icon": analyticsImage
    },
    {
        "id": 3,
        "title": "Gestione account",
        "description": "Puoi modificare i tuoi dati in modo molto semplice, le impostazioni, il profilo di rischio e puoi fare l' update",
        "icon": settingsImage
    }
]
class Services extends React.Component{
    
    render(){
        return (
            <section className="services" >
            <div className="header-services">
                <h2>Servizi che offriamo</h2>
            </div>
            <div className="container-services">
                <div className="grid-services">
                    {blocks.map(service =>
                        <CardService
                            id={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    )}
                </div>
            </div>
        </section>
        );
    }
}

export default Services;