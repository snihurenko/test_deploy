import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'

export default function UnauthenticatedRouter() {
  return (
    <div>
      <Switch>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}
