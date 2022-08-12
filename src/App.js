import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="app-wrapper-content">
        <Routes>
          <Route path='/dialogs'
            element={<DialogsContainer />} />
          <Route path='/profile/:userId'
            element={<ProfileContainer />} />
          <Route path='/profile'
            element={ <ProfileContainer /> } />
          <Route path='/users'
            element={<UsersContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
