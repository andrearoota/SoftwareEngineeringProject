import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import "./SettingsPage.css";
import "../index.css";


//SETTINGS PAGE 
//shows all personal details regarding users

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.get_data(props.user);
    this.state = {
      first_name: "a",
      last_name: "",
      gender: "",
      birthdate:"",
      cf:"",
      is_admin: false,
    }
  }

  //function that returns data of user currently logged
  async get_data(data) {

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
      first_name: resp.user.first_name,
      last_name: resp.user.last_name,
      gender: resp.user.gender,
      birthdate: resp.user.birthdate,
      cf: resp.user.codice_fiscale,
      is_admin: resp.user.is_admin,
    })
  }
    render(){
      var options =[
        {
          header:{
            name: "Account",
          },
      
          values: [
            {
              name: "Name",
              description: "Your personal data",
              data: this.state.first_name,
            },
            {
              name: "Surname",
              description: "Your personal data",
              data: this.state.last_name,
            },
            {
              name: "Gender",
              description: "m/f",
              data: this.state.gender,
            },
            {
              name: "Birthdate",
              description: "Your bithdate",
              data: this.state.birthdate,
            },
            {
              name: "Tax number",
              description: "Your tax number",
              data: this.state.cf,
            },
          ],
        },
      
        {
          header:{
            name: "Update",
          },
      
          values: [
            {
              name: "Are you pro?",
              description: "Your current account",
            },
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
                    <div>
                    {value.data}

                    </div>
                    
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


