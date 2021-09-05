import React, { useState } from "react";
import "./CreditCardVerify.scss";
import logo from "../../assets/images/logo.png";
import { authUser } from "../../Helpers/APIHelper";

function CreditCardVerify(props) {
  const [phone, setPhone] = useState("");
  console.log("App started!");
  const onSubmit = () => {
    if (phone.length === 10) {
      authUser(phone).then((res) => {
        console.log(res ? "login successful!" : "login failed!");
        res && props.history.push("/client-dashboard");
      });
    } else {
      console.error("Please enter a valid mobile number");
    }
  };
  const onChange = (e) => {
    const phoneInput = e.target.value;
    if (phoneInput.match(/^\d{0,10}$/)) {
      setPhone(phoneInput);
    } else {
      console.log("enter number");
    }
  };
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="card_bg_outer">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="card_detail_content mob_cards_bg">
                <div className="row">
                  <div className="col-lg-12 mb-2">
                    <img src={logo} className="logo_img" alt="logo" />
                  </div>
                  <div className="col-lg-12 mt-5">
                    <h4>Enter your phone number</h4>
                    <h6>Helps to signup/login</h6>

                    <div className="mt-5">
                      <h3 className="card_number">
                        <input
                          style={{ fontSize: "22px" }}
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={onChange}
                          placeholder="9898989898"
                        />
                      </h3>
                    </div>
                  </div>

                  <div className="col-lg-12 mt-5 d-flex">
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                        required
                      />
                    </div>
                    <label className="form-check-label" for="defaultCheck2">
                      Click to Agree
                      {/* upon agreeing, we will check with RBI approved credit
                      bureaus if your credit score meets our criteria for making
                      payments on CRED. don't worry, this won't impact your
                      current credit score. */}
                    </label>
                  </div>
                  <div className="col-lg-12 mt-5">
                    <button
                      onClick={onSubmit}
                      type="button"
                      className="custom-btn rad_button"
                    >
                      Continue
                    </button>
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

export default CreditCardVerify;
