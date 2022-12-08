import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import SigninPage from './pages/SigninPage';
import AnalyticsPage from './pages/AnalyticsPage';
import MoneyPage from './pages/MoneyPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import Backdrop from './components/Backdrop';
import MenuLaterale from './components/MenuLaterale';
import LandingPage from './pages/LandingPage';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      menuAperto: false,
      logged: false,
    }
    this.gestoreLogin=this.gestoreLogin.bind(this);
    this.gestoreSignin=this.gestoreSignin.bind(this);
    this.logout=this.logout.bind(this);
  }

  logout(){
    this.setState({logged:false,});
  }

  gestoreLogin(event) {
    event.preventDefault();
    /* if(document.getElementById('CF').value === 'admin' && document.getElementById('PW').value === 'admin'){
      this.setState({logged:true,});
    } */
    fetch('https://portafoglio-c87fe-default-rtdb.firebaseio.com/utenti.json')
    .then((response)=>{ return response.json(); })
    .then( (data) =>{
      for (const i in data){
        if(data[i].cf == document.getElementById('CF').value && data[i].password == document.getElementById('PW').value) {
          this.setState({logged:true,});
          return;
        }
      }
      return alert("Username o password errati");
    } );
  }

  gestoreSignin(event) {
    event.preventDefault();
    if( document.getElementById("pw").value !== document.getElementById("pw2").value ) {
      return alert("Le password non corrispondono");
    } else {
      let data={
        name: document.getElementById('nome').value,
        surname: document.getElementById('cognome').value,
        cf: document.getElementById('cf').value,
        password: document.getElementById('pw').value
      };

      fetch('https://portafoglio-c87fe-default-rtdb.firebaseio.com/utenti.json',
        { method: 'POST',
          body: JSON.stringify(data),}
      )
      .then(response => response.json()) //credo che sia inutile se non la uso
      .then(()=>{return alert("Registrazione eseguita, vai alla pagina di login per entrare nel sito")});
    }
  }

  gestoreSoldi(event){
    event.preventDefault();
  }

  render(){
    return (
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/login' element={
          this.state.logged ? <Navigate to='/app/analytics' replace /> : <LoginPage onLogin={this.gestoreLogin} onLogout={this.logout} /> 
        } />
        <Route exact path='/sign-in' element={ <SigninPage onSignin={this.gestoreSignin}/> }/>
        <Route path='/app' element={this.state.logged ? <Navigate replace to='/login' /> : null} />
        <Route exact path='/app/analytics' element={
          <div>
            <AnalyticsPage apriMenu={ ()=>{this.setState({menuAperto: true});} } />
            {this.state.menuAperto?
              <Backdrop onClick={()=>{
                this.setState({menuAperto: false})
              }} />
            : null}
            {this.state.menuAperto? <MenuLaterale onClick={ ()=>this.setState({menuAperto: false}) } />: null}
          </div>
        } />
        <Route exact path='/app/money' element={
          <div>
            <MoneyPage onTransaction={this.gestoreSoldi} apriMenu={ ()=>{this.setState({menuAperto: true})} } />
            {this.state.menuAperto?
              <Backdrop onClick={()=>{
                this.setState({menuAperto: false})
              }} />
            : null}
            {this.state.menuAperto? <MenuLaterale onClick={ ()=>this.setState({menuAperto: false}) } />: null}
          </div>
        } />
        <Route exact path='/app/notifications' element={
          <div>
            <NotificationsPage  apriMenu={ ()=>{this.setState({menuAperto: true})} } />
            {this.state.menuAperto?
              <Backdrop onClick={()=>{
                this.setState({menuAperto: false})
              }}/>
            : null}
            {this.state.menuAperto? <MenuLaterale onClick={ ()=>this.setState({menuAperto: false}) } />: null}
          </div>
        } />
        <Route exact path='/app/settings' element={
          <div>
            <SettingsPage  apriMenu={ ()=>{this.setState({menuAperto: true})} } />
            {this.state.menuAperto?
              <Backdrop onClick={()=>{
                this.setState({menuAperto: false})
              }}/>
            : null}
            {this.state.menuAperto? <MenuLaterale onClick={ ()=>this.setState({menuAperto: false}) } />: null}
          </div>
        } />
      </Routes>
    );
  }
}

export default App;