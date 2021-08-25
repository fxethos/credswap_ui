import React from 'react';
import "./CreditCardVerify.scss";
import logo from "../../assets/images/logo.png";


function CreditCardVerify() {
    return (
        <div>
          <div className="container-fluid p-0">
              <div className="card_bg_outer">
                  <div class="row">
                      <div class="col-lg-6 p-0">
                          <div className="card_detail_content mob_cards_bg">
                              <div class="row">
                                  <div class="col-lg-12 mb-2">
                                     <img src={logo} className="logo_img" alt="logo"/>
                                  </div>
                                  <div class="col-lg-12 mt-5">
                                      <h4>enter your phone number</h4>
                                      <h6>helps automatically pull details of 
your credit card from the credit bureau</h6>

<div className="mt-5" ><h3 className="card_number"><input type="text" placeholder="9898989898"/></h3></div>
                                </div>

                                <div className="col-lg-12 mt-5">
                                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" required />
</div>
<label class="form-check-label" for="defaultCheck2">
  upon agreeing, we will check with RBI approved credit bureaus if your credit score meets our criteria for making payments on CRED. don't worry, this won't impact your current credit score.
  </label>                                </div>
  <div className="col-lg-12 mt-5">
      <button type="button" class="btn btn-primary">
Agree & Continue </button>
      </div>
                              </div>

                          </div>
                      </div>
                      <div class="col-lg-6 p-0 col-0">
                          <div className="cards_bg">
</div>
                      </div>
                      
                  </div>
              </div>
              
          </div>
        </div>
    )
}

export default CreditCardVerify;