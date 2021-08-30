import React from "react";
import "./ClientDashboard.scss";
import logo from "../../assets/images/logo.png";
// import { createUser } from "../../Helpers/APIHelper";
import ClientProfile from "../ClientProfile/ClientProfile";

function ClientDashboard(props) {
  //   console.log("createUser" + createUser);

  //   const [phone, setPhone] = useState("");
  //   const onSubmit = () => {
  //     if (phone.length === 10) {
  //       createUser(phone).then((res) => {
  //         console.log(res ? "login successful!" : "login failed!");
  //         res && props.history.push("/welcome");
  //       });
  //     } else {
  //       console.error("Please enter a valid mobile number");
  //     }
  //   };
  //   const onChange = (e) => {
  //     const phoneInput = e.target.value;
  //     if (!phoneInput || phoneInput.match(/^\d{0,10}$/)) {
  //       setPhone(phoneInput);
  //     } else {
  //       console.log("enter number");
  //     }
  //   };
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="card_bg_outer">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div className="profile_detail_content mob_cards_bg">
                <div className="row">
                  <div class="col-lg-12 mb-2">
                    <img src={logo} className="logo_img" alt="logo" />
                  </div>
                </div>
                <div class="container1">
                  <h4>Dashboard</h4>
                  <ul class="nav nav-tabs nav-justified" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#profile"
                      >
                        Profile
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#covert">
                        Convert
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#exchange">
                        Exchange
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div id="profile" class="container1 tab-pane active">
                      <br />
                      {/* <h5>Profile Details</h5> */}
                      <div>
                        <ClientProfile />
                      </div>
                    </div>
                    <div id="covert" class="container1 tab-pane fade">
                      <br />
                      <h3>Covert</h3>
                      <p>2</p>
                    </div>
                    <div id="exchange" class="container1 tab-pane fade">
                      <br />
                      <h3>Exchange</h3>
                      <p>3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 p-0 col-0">
              <div className="cards_bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
