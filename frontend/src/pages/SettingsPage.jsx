import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import "./SettingsPage.css";
import "../index.css";

const options =[
  {
    header:{
      name: "Account",
    },

    values: [
      {
      name: "Name Surname",
      description: "Change your personal data",
      },
      {
      name: "Password",
      description: "Change your password",
      },
      {
        name: "Premium",
        description: "Upgrade to premium account",
        },
    ],
  },

  {
    header:{
      name: "Billing",
    },

    values: [
      {
      name: "Billing Information",
      description: "Manage your billing information",
      },
      {
        name: "Invoices",
        description: "Track your invoices and their status",
      },
    ],
  },

  {
    header:{
      name: "Support",
    },

    values: [
      {
      name: "Help",
      description: "Having trouble",
      },
      {
        name: "FAQ",
        description: "View our frequently asked questions",
      },
    ],
  },



];

class SettingsPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars'/></button>
            <h1>Settings</h1>
            <div className="home">
              
              <div className='homeContainer'>
                
              {options.map((option)=> (

                <div key= {option.header.name} className="group">
                  <h3> {option.header.name}</h3>

                  <ListGroup as="ul">
                  {option.values.map((value)=>(
                  <div key= {value.name}>
                    <ListGroup.Item as="li"className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      {value.name}
                    </div>
                    {value.description}
                  </div>
                  </ListGroup.Item>
                  
                  </div>
                  ))}
                  </ListGroup>
          
                  </div>  
                  
              ))}
            </div>
            
            </div>
        </div>);
    }
}

export default SettingsPage;


