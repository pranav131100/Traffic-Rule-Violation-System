import React from 'react'
import Panel from './Panel';
import App1 from './Civilianhome';
import { Route,Switch } from 'react-router';
import Policehome from './PoilceHome';
import Home from "./Home.jsx"
import About from "./About.jsx"
import Logout from './Logout';
import Contact from './Contact';
import {useRouteMatch} from "react-router-dom"
import PoliceGrid from './PoliceGrid';
import CivilianGrid from './CivilianGrid';
import ProtectedRoute from './ProtectedRoute';
import {Auth} from './Home1'
import {Auth1} from './Home'




const App = ()=>{
    const {url,path} = useRouteMatch();
    return(
        <>
        <Switch>
        <Route  exact path = "/" component = {Panel}></Route>
        <Route  exact path = "/home1" component = {Policehome}></Route>
        <Route  path = "/main" component = {App1}></Route>
        <ProtectedRoute path = "/login/police"  component = {PoliceGrid} isAuth = {Auth}/>
        <ProtectedRoute path = "/login/civilian"  component = {CivilianGrid} isAuth = {Auth1} />
        </Switch>
        </>
    )
}

export default App;