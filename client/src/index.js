import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import PoliceGrid from './PoliceGrid.jsx';
import CivilianGrid from './CivilianGrid'


ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>
  
,document.getElementById('root'));
 