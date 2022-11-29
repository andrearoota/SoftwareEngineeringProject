import React from 'react';
import { ReactDOM } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import SigninPage from './pages/SigninPage';
import AnalyticsPage from './pages/AnalyticsPage';
import MoneyPage from './pages/MoneyPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';

class App extends React.Component {
  render(){
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/sign-in' element={<SigninPage />} />
        <Route exact path='/analytics' element={<AnalyticsPage />} />
        <Route exact path='/money' element={<MoneyPage />} />
        <Route exact path='/notifications' element={<NotificationsPage />} />
        <Route exact path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
  );
  }
}

export default App;