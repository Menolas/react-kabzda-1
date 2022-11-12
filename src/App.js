import React, {Component} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes, HashRouter, Navigate} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer.ts";
import Preloader from './components/common/Preloader/Preloader';
import './App.css';
import { withRouter } from './utils/withRouter';
//import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occurred");
    //console.error(promiseRejectionEvent);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
              <Route exact path='/'
                element={<Navigate to={'/profile'}/>} />
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
              <Route path='*'
                element={<div>404 Not Found</div>} />
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
