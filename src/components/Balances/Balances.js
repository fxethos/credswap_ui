import React, { useState } from "react";
import "./Balances.scss";

const Balances = (props) => {
  return (
    <div className="balances-container">
      <div>
        <h4>Your Balances</h4>
      </div>
      <div className="balances-wrapper">
        <div id="cred-balance" className="balance-wrapper">
          <h3 className="balance-header">CRED</h3>
          <div className="balance">{props.credBalance}</div>
        </div>
        <div id="cret-balance" className="balance-wrapper">
          <h3 className="balance-header">CRET</h3>
          <div className="balance">{props.cretBalance}</div>
        </div>
      </div>
    </div>
  );
};

export default Balances;
