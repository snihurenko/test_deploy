import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { ContentPage } from '../pages/ContentPage'
import { Dashboard } from '../pages/Dashboard'
import { NotFound } from '../pages/NotFound'

export default function AuthenticatedRouter() {
  return (
    <div>
      <Link to='/content'></Link>
      <Link to='/'></Link>
      <Switch>
        <Route path='/content'>
          <ContentPage />
        </Route>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route exact path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}
