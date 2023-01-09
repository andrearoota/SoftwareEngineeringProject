import React from "react";
import "./AnalyticsPage.css";
import Widget from "../components/Widget";
import Chart from "../components/Chart";
import Pie_Chart from "../components/Pie_Chart";
import Card from "../components/Card";

// ANALYTICS PAGE
//PIECHART that show how the money is allocated (which stocks)
//CARD that shows how much money is invested, how much is still available, the current value
//CHART that shows the current value of the wallet vs the initial value
//WIDGETS that show just the trend of 4 of user stocks

const assets = [
  {
    amount: 39.354,
    percentage: -4,
    title: 'Apple',

  },
  {
    amount: 4.396,
    percentage: +23,
    title: 'Tesla',

  },
  {
    amount: 423.39,
    percentage: +38,
    title: 'Microsoft',

  },
  {
    amount: 39.354,
    percentage: -12,
    title: 'Eni',

  },
];

//function that returns stocks of user currently logged
async function get_stocks(data) {

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

  return resp.user;
}




class AnalyticsPage extends React.Component {
  constructor(props) {
    super(props);
    let api_resp = get_stocks(props.user);
    let wallet= api_resp.wallet;
    let stocks=api_resp.stocks;

    
  }

  render() {
    return (
      <div className="menu">
        <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars' /></button>
        <h1> Analytics </h1>

        <div className="home">
          <div className="homeContainer">
            <div className="charts">
              <Pie_Chart prop={stocks} />
              <Card prop={stocks} wallet={wallet}/>
            </div>
            <div className="charts">
              <Chart title="Investment growth" aspect={2 / 1} prop={stocks} wallet={wallet}/>
            </div>
            <div className="widgets">
              {stocks.slice(0,4).map((item) => (
                <Widget prop={item} />
              ))}
            </div>
          </div>
        </div>
      </div>);
  }
}

export default AnalyticsPage; 