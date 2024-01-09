import React from 'react';
import App from './App';
import {Provider,} from "react-redux"
import store from './store';
import {createRoot} from "react-dom/client"
import {positions,transitions,Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import {BrowserRouter as Router} from 'react-router-dom';

const rootelement = document.getElementById('root');
const root = createRoot(rootelement);
const options={
      timeout:5000,
      position:positions.BOTTOM_CENTER,
      transition:transitions.SCALE
};
root.render(
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
        <App />
        </Router>
        
      </AlertProvider>
      
    </Provider>
   
  
);