import React from "react"
import { Switch, Route } from "react-router-dom"
import LogInPage from "./Components/LogInPage/LogInPage"
import Homepage from "./Components/HomePage/HomePage"

export default (
  <Switch>
    <Route exact path="/" component={LogInPage} />
    <Route exact path="/channels" component={Homepage} />
  </Switch>
)
