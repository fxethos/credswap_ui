import React from "react";
import "./ClientDashboard.scss";
import logo from "../../assets/images/logo.png";
import { getUser } from "../../Helpers/APIHelper";
import ClientProfile from "../ClientProfile/ClientProfile";

function ClientDashboard(props) {
  getUser().then((res) => {
    // console.log(res);
  });

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
                      <h3>Covert</h3>
                      <p>2</p>
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
