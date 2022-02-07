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
import {Auth1} from './Home'
import { useState } from 'react';
import { useEffect } from 'react';




const App = ()=>{
    const {url,path} = useRouteMatch();

    

    useEffect(()=>{
        const police = localStorage.getItem("Police");

        if(police){
            localStorage.setItem("plogged",true);
        }

        const civilian = localStorage.getItem("Civilian");

        if(civilian){
            localStorage.setItem("clogged",true);
        }

    },[])

    return(
        <>
        <Switch>
        <Route  exact path = "/" component = {Panel}></Route>
        <Route  exact path = "/home1" component = {Policehome}></Route>
        <Route  path = "/main" component = {App1}></Route>
        <ProtectedRoute path = "/login/police"  component = {PoliceGrid} isAuth = {localStorage.getItem("plogged")}/>
        <ProtectedRoute path = "/login/civilian/:lno"  component = {CivilianGrid} isAuth = {localStorage.getItem("clogged")} />
        </Switch>
        </>
    )
}       

export default App;