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

// App
// Il componente che viene renderizzato da index
// Qua viene gestito tutto:
// - si imposta il routing
// - si definiscono le funzioni da passare alle pagine per la gestione dei vari eventi
// - si gestisce lo stato della pagina
// - si richiamano selettivamente i componenti da renderizzare

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

  //metodo logout: imposta lo stato su non loggato
  logout(){
    this.setState({logged:false,});
  }

  //metodo gestoreLogin: da passare alla pagina di login per gestire l'accesso
  //invia una richiesta al server
  //riceve come parametro un evento automaticamente generato dal submit
  async gestoreLogin(event) {
    event.preventDefault();
    const log= new FormData(document.getElementById('login'));
    const email= log.get('mail');
    const password= log.get('pw');
    
    const response=await fetch('${window.location.origin}/api/login/$email/$password', {method: 'POST',} )
    console.log(response);
  }

  //metodo gestoreLogin: da passare alla pagina di registrazione per gestire la medesima
  //invia una richiesta al server
  //riceve come parametro un evento automaticamente generato dal submit
  gestoreSignin(event) {
    event.preventDefault();
    const dati= new FormData(document.getElementById('sign-in'));
    if( dati.get('pw') !== dati.get('pw2') ) {
      return alert("Le password non corrispondono");
    } else {
      const nome= dati.get('nome')+ dati.get('cognome');
      const mail= dati.get('mail');
      const password= dati.get('pw');

      fetch('${window.location.origin}/api/register/$nome/$email/$password', {method: 'POST',})
      .then(response => console.log(response));
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