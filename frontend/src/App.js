import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
    }
  }

  render(){
    return (
      <div>
        <div>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/sign-in' element={<SigninPage />} />
            <Route exact path='/analytics' element={
              <div>
              <AnalyticsPage apriMenu={ ()=>{this.setState({menuAperto: true})} } />
              {this.state.menuAperto?
                <Backdrop onClick={()=>{
                  this.setState({menuAperto: false})
                }}/>
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
                }}/>
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