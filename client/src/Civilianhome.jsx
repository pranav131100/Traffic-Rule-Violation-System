import React from 'react'
import Home from "./Home.jsx"
import About from "./About.jsx"
import Logout from './Logout';
import Contact from "./Contact"
import Navbar from "./Navbar"
import {Switch, Route, useRouteMatch} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import PoliceGrid from './PoliceGrid.jsx';


const App1 = ()=>{
    const {url,path} = useRouteMatch();

    return(
      
      <>
        <Navbar></Navbar>    
        <Switch>
            <Route exact path = {`${path}`}  component = {Home}/>
            <Route path = {`${path}/about`}  component = {About}/>
            <Route path = {`${path}/login`}  component = {PoliceGrid}/>
            <Route path = {`${path}/contact`}  component = {Contact}/>
        </Switch>
    
      </>
    )
}

export default App1;