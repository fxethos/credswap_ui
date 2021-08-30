import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreditCardVerify from "../pages/CreditCardVerify/CreditCardVerify";
import ClientDashboard from "../pages/ClientDashboard/ClientDashboard";
import ClientProfile from "../pages/ClientProfile/ClientProfile";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={CreditCardVerify} />
      <Route path="/client-dashboard" exact component={ClientDashboard} />
      <Route path="/client-profile" exact component={ClientProfile} />
    </Switch>
  </Router>
);

export default AppRouter;
