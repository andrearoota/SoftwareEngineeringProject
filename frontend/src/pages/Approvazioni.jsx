import React from 'react';
import classes from './Approvazioni.module.css';

const datiprova=[
    {
        first_name:"Matteo",
        last_name:"Colombo",
        gender:"m",
        birthdate:"2001-10-05",
        codice_fiscale:"non vi do il mio codice fiscale ladri",
        email:"m.colombo77@studenti.unibg.it",
        password:"admin",
    },
    {
        first_name:"Pier",
        last_name:"Il fannullone",
        gender:"f",
        birthdate:"2001-10-05",
        codice_fiscale:"non vi do il mio codice fiscale",
        email:"pier@studenti.unibg.it",
        password:"admin",
    }
]

// la pagina approvazioni non è raggiunta da nessun pulsante/link né contiene pulsanti/link ad altre pagine in quanto destinata solo all'admin
export default class PaginaApprovazioni extends React.Component {
    approva(item){
        console.log(item);
        //api ecc ecc
    }

    render(){
        return(
            datiprova.map(
                (item) => {
                    return(
                        <div key={item.codice_fiscale} className={classes.item}>
                            <table>
                                <tr>
                                    <td>
                                        {item.first_name}<br />{item.last_name}<br />{item.gender}<br />{item.birthdate}<br />{item.codice_fiscale}<br />{item.email}<br />{item.password}
                                    </td>
                                    <td className={classes.casella}>
                                        <button onClick={ this.approva.bind(this,item) }>Approva</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    );
                }
            )
        );
    }
}