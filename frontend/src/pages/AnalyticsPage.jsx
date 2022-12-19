import React from "react";
import "./AnalyticsPage.css";
import Widget from "../components/Widget";
import Chart from "../components/Chart";

const assets=[
    {
      amount: '39,354',
      percentage: '-4',
      title: 'Apple',
    
    },
    {
      amount: '4,396',
      percentage: '+23',
      title: 'Tesla',
      
    },
    {
      amount: '423,39',
      percentage: '+38',
      title: 'Microsoft',
      
    },
    {
      amount: '39,354',
      percentage: '-12',
      title: 'Eni',
     
    },
  ];

class AnalyticsPage extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        return (
        <div className="home">
          <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars'/></button>
            <div className="homeContainer">

              <div className="charts">
                <Chart title="Investment growth" aspect={2 / 1} />
              </div>
              <div className="widgets">
                {assets.map((item)=>(
                  <Widget prop={item}/>
                ))}
              </div>
            
            </div>
        </div>);
    }
}

export default AnalyticsPage; 