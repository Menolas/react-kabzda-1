import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, } from 'react-router-dom';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals();
}

renderEntireTree(store.getState());


store.subscribe(() => {
  renderEntireTree()
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

