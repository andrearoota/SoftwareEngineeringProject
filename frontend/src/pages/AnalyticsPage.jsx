import React from "react";
import "./AnalyticsPage.css";
import Widget from "../components/Widget";
import Chart from "../components/Chart";
import Pie_Chart from "../components/Pie_Chart";
import Card from "../components/Card";

const assets=[
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

class AnalyticsPage extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        return (
           <div className="menu"> 
            <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars'/></button>
            <h1> Analytics </h1>
         
          <div className="home">
            <div className="homeContainer">
              <div className="charts">
                <Pie_Chart data={assets} />
                <Card />
              </div>
              <div className="charts">
              <Chart title="Investment growth" aspect={2 / 1} />
              </div>
              <div className="widgets">
                {assets.map((item)=>(
                  <Widget prop={item}/>
                ))}
              </div>
              </div>
            </div>
        </div>);
    }
}

export default AnalyticsPage; 