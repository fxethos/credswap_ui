import React, { useEffect, useState } from "react";
import "./ClientDashboard.scss";
import logo from "../../assets/images/logo.png";
import { getUser, spend } from "../../Helpers/APIHelper";
import WalletClient from "../../Helpers/WalletHelper";
import ClientProfile from "../ClientProfile/ClientProfile";
import ConvertForm from "../../components/ConvertForm/ConvertForm";
import Balances from "../../components/Balances/Balances";

function ClientDashboard(props) {

  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : {})
  const [credBalance, setCredBalance] = useState(0);
  const [cretBalance, setCretBalance] = useState(0);
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    if (Object.entries(user).length === 0) {
      // getUser().then(user => {
      //   setUser(user);
      //   localStorage.setItem("user", JSON.stringify(user));
      // });
      updateUser();
    }
    setCredBalance(user.coins);
    updateBalance();
    console.log("Wallet connected", WalletClient.walletConnected);
    if(WalletClient.walletConnected === true) {
      WalletClient.getPublicKey().then(pubKey => {
        if(pubKey) {
          setWallet(pubKey.toBase58());
        }
      });
      WalletClient.subscribe(updateBalance).then(res => {
        console.log("Subscription done!", res);
      });
    }
  }, [user, WalletClient.walletConnected]);

  const updateBalance = () => {
    WalletClient.getBalance().then(balance => {
      setCretBalance(balance.value.amount);
    }).catch(err => {
      console.log(err);
    });
  }

  const updateUser = () => {
    getUser().then(user => {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    });
  }

  const handleConvertRequest = (coins) => {
    spend(coins).then(data => {
      console.log("Burn response:", data);
      updateUser();
    });
  }

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="card_bg_outer">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="profile_detail_content mob_cards_bg">
                <div className="row">
                  <div className="col-lg-12 mb-2">
                    <img src={logo} className="logo_img" alt="logo" />
                  </div>
                </div>
                <div className="container1">
                  <h4>Dashboard</h4>
                  <ul className="nav nav-tabs nav-justified" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#profile"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#covert">
                        Convert
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#exchange"
                      >
                        Exchange
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="profile" className="container1 tab-pane active">
                      <br />
                      {/* <h5>Profile Details</h5> */}
                      <div>
                        <ClientProfile />
                      </div>
                    </div>
                    <div id="covert" className="container1 tab-pane fade">
                      <br />
                      <h3>Convert</h3>
                      <p>your CRED reward points into CRET tokens</p>
                      <p>Your wallet address: {wallet}</p>
                      <ConvertForm onConvertRequest={handleConvertRequest} />
                      <Balances credBalance={credBalance} cretBalance={cretBalance} />
                    </div>
                    <div id="exchange" className="container1 tab-pane fade">
                      <br />
                      <h3>Exchange</h3>
                      <p>3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 col-0">
              <div className="cards_bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
