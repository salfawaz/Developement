/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.Airline.com/product/material-dashboard-react
* Copyright 2020 Airline (https://www.Airline.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Airline

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import LoginPage from "views/LoginPage.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Route from="/" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
