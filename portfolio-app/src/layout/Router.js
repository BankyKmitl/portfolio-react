import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/index'
import Resume from '../pages/Resume/index'

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/resume' component={Resume}/>
  </Switch>
)
export default Router