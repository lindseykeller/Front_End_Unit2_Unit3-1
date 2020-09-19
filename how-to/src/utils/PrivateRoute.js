import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />
        }
        //should it go to homepage or login if user is not signed in?
        return <Redirect to='/login' />
      }}
    />
  )
}
export default PrivateRoute