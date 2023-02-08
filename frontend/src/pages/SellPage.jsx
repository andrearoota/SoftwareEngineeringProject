import React from 'react';

import DataTable from 'react-data-table-component';
import "../index.css";
import classes from "./SellPage.module.css";

class SellPage extends React.Component{
    constructor(props){
        super(props);
        this.get_stocks(props.user);
        this.state = {
            stocks: [],
        }
    }

    async get_stocks(data) {

        var requestOptions = {
          method: 'GET',
          headers: {
            "Accept": "application/json",
            "Authorization": `${data.authorisation.type} ${data.authorisation.token}`,
          },
          redirect: 'follow'
        };
    
        const resp = await fetch(`http://localhost/api/users/${data.user.id}/stocks`, requestOptions)
          .then(response => response.json())
          .catch(error => console.log('error', error))
    
        this.setState({
          stocks: resp.user.stocks,
        })
      }

    render(){
        const columns = [
            {
                name: 'Stock_name',
                selector: row => row.stock_name,
            },
            {
                name: 'Number of stocks',
                selector: row => row.number_stocks,
            },
            {
                name: 'Purchase cost',
                selector: row => row.purchase_cost,
            },
            {
                name: 'Current Value',
                selector: row => row.current_value,
            },
        ];


        return (
        <div className={classes.menu}>
        <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars' /></button>
        <h1> SellPage </h1>
        <div className={classes.home}>
          <div className={classes.homeContainer}>
          <DataTable
            columns={columns}
            data={this.state.stocks}
        />
            
          </div>
          </div>
        </div> );
    }
}

export default SellPage;