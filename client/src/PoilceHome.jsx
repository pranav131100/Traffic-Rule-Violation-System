import React from 'react'
import Navbar from './Navbar';
import Home1 from "./Home1.jsx"
import About from "./About.jsx"
import Logout from './Logout';
import Contact from "./Contact"
import PoliceGrid from "./PoliceGrid"
import { Switch,Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

const Policehome = ()=>{
    const{path,url} = useRouteMatch();
    return(
        <>
            <Navbar></Navbar>
            <Switch>
            <Route exact path = {`${path}`}  component = {Home1}/>
            <Route path = {`${path}/about`}  component = {About}/>
            <Route path = {`${path}/login`}  component = {PoliceGrid}/>
            <Route path = {`${path}/contact`}  component = {Contact}/>
            </Switch>
            

        </>
    )
}

export default Policehome;