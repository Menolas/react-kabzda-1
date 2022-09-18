import React, {Component} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, HashRouter, BrowserRouter, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from './components/common/Preloader/Preloader';
import './App.css';
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const withRouter = (Children) => {
  return(props) => {
    const match  = {params: useParams()};
    return <Children {...props}  match = {match}/>
  }
}

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
 
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <main className="app-wrapper-content">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/dialogs'
                element={<DialogsContainer/>} />
              <Route path='/profile/:userId'
                element={<ProfileContainer />} />
              <Route path='/profile'
                element={<ProfileContainer />} />
              <Route path='/users'
                element={<UsersContainer />} />
              <Route path='/login'
                element={<Login />} />
              </Routes>
            </React.Suspense>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
  
let SamuraiJSApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp;
