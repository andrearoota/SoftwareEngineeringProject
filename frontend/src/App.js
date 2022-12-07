import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
  }

  gestoreLogin(event) {
    event.preventDefault();
    if(document.getElementById('user').value === 'admin' && document.getElementById('pw').value === 'admin'){
        console.log(window.location.pathname);
        this.setState={logged: true};
    }
  }

  render(){
    return (
      <div>
        <div>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/login' element={
              //<LoginPage onLogin={this.gestoreLogin} isLogged={this.state.logged}/>
              this.state.logged ? <Navigate to='/analytics' replace/> : <LoginPage onLogin={this.gestoreLogin}/> 
            } />
            <Route exact path='/sign-in' element={<SigninPage />} />
            <Route exact path='/analytics' element={
              <div>
              <AnalyticsPage apriMenu={ ()=>{this.setState({menuAperto: true})} } />
              {this.state.menuAperto?
                <Backdrop onClick={()=>{
                  this.setState({menuAperto: false})
                }} />
              : null}
              {this.state.menuAperto? <MenuLaterale onClick={ ()=>this.setState({menuAperto: false}) } />: null}
              </div>
            } />
            <Route exact path='/money' element={
              <div>
              <MoneyPage  apriMenu={ ()=>{this.setState({menuAperto: true})} } />
              {this.state.menuAperto?
                <Backdrop onClick={()=>{
                  this.setState({menuAperto: false})
                }} />
              : null}
              {this.state.menuAperto? <MenuLaterale onClick={ ()=>this.setState({menuAperto: false}) } />: null}
              </div>
            } />
            <Route exact path='/notifications' element={
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
            <Route exact path='/settings' element={
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
        </div>
      </div>
    );
  }
}

export default App;