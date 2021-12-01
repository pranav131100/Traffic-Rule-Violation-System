import React from 'react'
import { Route,Redirect } from 'react-router';

const ProtectedRoute = ({isAuth: isAuth , component : Component, ...rest})=>{
    return(
        <>
            <Route {...rest} render = {()=>{
              if(isAuth){
                  return(
                      <Component/>
                  )
              }else{
                  return(
                      <Redirect to="/" />
                  )
              }
            }}/>
        </>
    )
}

export default ProtectedRoute;