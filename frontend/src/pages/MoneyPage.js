import React from 'react';
import classes from './MoneyPage.module.css';

class MoneyPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <button onClick={this.props.apriMenu} className='menu'><i class='fas fa-bars'/></button>
            <form id="money" className="">
                Inserisci la quantità di denaro che vuoi caricare<br />
                <input type='number' default='100' min='1' max='100000' />
                <br />
                <button type="submit" className={classes.go}>Carica</button>
            </form>
        </div>;
    }
}

export default MoneyPage;