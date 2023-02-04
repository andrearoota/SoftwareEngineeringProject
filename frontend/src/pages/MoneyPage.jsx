import React from 'react';
import classes from './MoneyPage.module.css';
import "../index.css";

class MoneyPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars'/></button>
            <form id="money" className={classes.spotlight} onSubmit={this.props.onTransaction}>
                1. Inserisci l'importo <br />
                <input type='number' default='100' min='1' max='100000' />
                <p>2. Seleziona se vuoi caricare il denaro o prelevarlo<br />
                Ricordiamo che per prelevare del denaro questo non deve essere depositato in alcun investimento</p>
                <input type="radio" name='movement' />Voglio caricare il denaro <br />
                <input type="radio" name='movement' />Voglio prelevare il denaro <br />
                <button type="submit" className={classes.go}>Conferma</button>
            </form>
        </div>;
    }
}

export default MoneyPage;