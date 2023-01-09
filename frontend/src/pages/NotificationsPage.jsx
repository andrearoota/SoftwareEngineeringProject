import React from 'react';
import Notification from '../components/Notification';
import "./NotificationsPage.css";




const notifications=[
    { 
        type: "buy",
        stock_name: 'Apple',
        user_id: 1,
        price: "312"
    
    },

    { 
        type: "sell",
        stock_name: 'Microsoft',
        user_id: 1,
        price: "143"
    
    },
    { 
        type: "buy",
        stock_name: 'Tesla',
        user_id: 1,
        price: "39"
    
    },
    { 
        type: "sell",
        stock_name: 'Adobe',
        user_id: 1,
        price: "211"
    
    },
    
  ];

class NotificationsPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars'/></button>
            
            <h1>Notifications</h1>
            <div className='home'>
            <div className='homeContainer'> 
            
                {notifications.map((item)=>(
                    <div className='notifications'>
                  <Notification prop={item}/>
                  
                  </div>
                ))}
              
              </div>
              </div>
        </div>);
    }
}

export default NotificationsPage;