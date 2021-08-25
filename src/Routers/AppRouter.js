import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreditCardVerify from "../pages/CreditCardVerify/CreditCardVerify";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={CreditCardVerify} />
    </Switch>
  </Router>
);

export default AppRouter;
