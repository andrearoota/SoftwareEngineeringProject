import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import SigninPage from './pages/SigninPage';
import AnalyticsPage from './pages/AnalyticsPage';
import MoneyPage from './pages/MoneyPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';

// App
// Il componente che viene renderizzato da index
// Qua viene gestito tutto:
// - si imposta il routing
// - si definiscono le funzioni da passare alle pagine per la gestione dei vari eventi
// - si gestisce lo stato della pagina
// - si richiamano selettivamente i componenti da renderizzare
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
  constructor() {
    super();
    this.state = {
      menuAperto: false,
      logged: false,
      user: null,
    }

    let user = document.cookie
      .split('; ')
      .find((row) => row.startsWith('user='))
      ?.split('=')[1];

    if (user !== undefined) {
      this.state.logged = true;
      this.state.user = JSON.parse(user);
    }

    this.gestoreLogin = this.gestoreLogin.bind(this);
    this.gestoreSignin = this.gestoreSignin.bind(this);
    this.logout = this.logout.bind(this);
  }

  //metodo logout: imposta lo stato su non loggato
  async logout() {
    var requestOptions = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer" + this.state.user.authorization.token,
      },
      redirect: 'follow',
    };

    const resp = await fetch("http://localhost/api/auth/logout", requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));

    if (resp.status === "success") {
      this.setState({ logged: false, });
      alert(resp.message);
    }
  }

  //metodo gestoreLogin: da passare alla pagina di login per gestire l'accesso
  //invia una richiesta al server
  //riceve come parametro un evento automaticamente generato dal submit
  async gestoreLogin(event) {
    event.preventDefault();

    let requestOptions = {
      method: 'POST',
      body: new FormData(document.getElementById('login')),
      redirect: 'follow'
    };

    const resp = await fetch("http://localhost/api/auth/login", requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));

    if (resp.status === "success") {
      document.cookie = `user=${JSON.stringify(resp)}`;

      this.setState({ logged: true, user: resp });
    } else {
      alert("Username o password errati");
      this.setState({ user: null });
    }
  }

  //metodo gestoreLogin: da passare alla pagina di registrazione per gestire la medesima
  //invia una richiesta al server
  //riceve come parametro un evento automaticamente generato dal submit
  async gestoreSignin(event) {
    event.preventDefault();

    const dati = new FormData(document.getElementById('sign-in'));
    if (dati.get('password') !== dati.get('password2')) {
      return alert("Le password non corrispondono");
    } else {
      var requestOptions = {
        method: 'POST',
        headers: { "Accept": "application/json" },
        body: dati,
        redirect: 'follow'
      };

      const resp = await fetch("http://localhost/api/auth/register", requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));

      if (resp.status === "success") {
        alert("Registrazione effettuata con successo, prima che il tuo account sia attivo è necessaria l'approvazione di un amministratore");
      } else {
        alert("La registrazione non è andata a buon fine, ritenta");
      }
    }
  }

  gestoreSoldi(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/login' element={
          this.state.logged ? <Navigate to='/app/analytics' replace /> : <LoginPage onLogin={this.gestoreLogin} onLogout={this.logout} />
        } />
        <Route exact path='/sign-in' element={this.state.logged ? <Navigate to='/app/analytics' replace /> :
          <SigninPage onSignin={this.gestoreSignin} />} />
        <Route exact path='/app/analytics' element={
          <div>
            <AnalyticsPage user={this.state.user} apriMenu={() => { this.setState({ menuAperto: true }); }} />
            {this.state.menuAperto ?
              <Backdrop onClick={() => {
                this.setState({ menuAperto: false })
              }} />
              : null}
            {this.state.menuAperto ? <MenuLaterale onClick={() => this.setState({ menuAperto: false })} /> : null}
          </div>
        } />
        <Route exact path='/app/money' element={
          <div>
            <MoneyPage onTransaction={this.gestoreSoldi} apriMenu={() => { this.setState({ menuAperto: true }) }} />
            {this.state.menuAperto ?
              <Backdrop onClick={() => {
                this.setState({ menuAperto: false })
              }} />
              : null}
            {this.state.menuAperto ? <MenuLaterale onClick={() => this.setState({ menuAperto: false })} /> : null}
          </div>
        } />
        <Route exact path='/app/notifications' element={
          <div>
            <NotificationsPage apriMenu={() => { this.setState({ menuAperto: true }) }} />
            {this.state.menuAperto ?
              <Backdrop onClick={() => {
                this.setState({ menuAperto: false })
              }} />
              : null}
            {this.state.menuAperto ? <MenuLaterale onClick={() => this.setState({ menuAperto: false })} /> : null}
          </div>
        } />
        <Route exact path='/app/settings' element={
          <div>
            <SettingsPage apriMenu={() => { this.setState({ menuAperto: true }) }} />
            {this.state.menuAperto ?
              <Backdrop onClick={() => {
                this.setState({ menuAperto: false })
              }} />
              : null}
            {this.state.menuAperto ? <MenuLaterale onClick={() => this.setState({ menuAperto: false })} /> : null}
          </div>
        } />
      </Routes>
    );
  }
}

export default App;