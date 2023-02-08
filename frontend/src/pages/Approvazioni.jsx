import React from 'react';
import "../index.css";
import classes from './Approvazioni.module.css';


// la pagina approvazioni non è raggiunta da nessun pulsante/link né contiene pulsanti/link ad altre pagine in quanto destinata solo all'admin
export default class PaginaApprovazioni extends React.Component {
    constructor(props) {
        super(props);
        this.get_info(props.user);

        //inizializzo vettore utenti
        this.state = {
            utenti: [],
        }
    }

    async get_info(data) {
        var requestOptions = {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Authorization": `${this.props.user.authorisation.type} ${this.props.user.authorisation.token}`,
            },
            redirect: 'follow'
        };

        const resp = await fetch(`http://localhost/api/admin/users`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

        //aggiorno vettore utenti
        this.setState({
            users: resp.users.filter((element, index) => { return !element.approved_by_administrator }), // only users not approved
        });
    }

    async approva(item) {
        var urlencoded = new URLSearchParams();
        urlencoded.append("approved_by_administrator", true);

        //api
        var requestOptions = {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                "Authorization": `${this.props.user.authorisation.type} ${this.props.user.authorisation.token}`,
            },
            body: urlencoded,
            redirect: 'follow'
        };

        const resp = await fetch(`http://localhost/api/admin/users/${item.id}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

        if (resp.status === "success") {
            this.get_info(this.props.user);
            //se l'approvazione ha successo richiedo la lista aggiornata degli utenti da approvare
        }
    }

    render() {
        if (this.state.users > 0) {
            return (
                <div className={classes.menu}>
                    <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars' /></button>


                    {this.state.users.map(
                        (item) => {
                            return (
                                <div key={item.id} className={classes.item}>
                                    <table>
                                        <tr>
                                            <td>
                                                {item.first_name}<br />{item.last_name}<br />{item.gender}<br />{item.birthdate}<br />{item.codice_fiscale}<br />{item.email}
                                            </td>
                                            <td className={classes.casella}>
                                                <button onClick={this.approva.bind(this, item)}>Approva</button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            );
                        }
                    )}

                </div>
            );
        }
        return (
            <div className={classes.menu}>
                <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars' /></button>

                <h5>Nessun utente da approvare</h5>
            </div>)
    }
}