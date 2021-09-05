import React from "react";
import { withRouter } from "react-router-dom";
import WalletClient from '../../Helpers/WalletHelper';

class ExchangeForm extends React.Component {
  state = { 
    showing: true,
    amount: '',
    toAddress: ''
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d*$/)) {
      this.setState(() => ({amount}));
    };
  }
  onAddressChange = (e) => {
    const toAddress = e.target.value;
    this.setState(() => ({toAddress}));
  }
  onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      amount: parseInt(this.state.amount),
      toAddress: this.state.toAddress
    }
    WalletClient.send(payload);
  }
  render() {
    const { showing } = this.state;

    return (
      <div>
        <form className="profile-details p-1" onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Amount</td>
                <td>:</td>
                <td>
                  <input 
                    type="text" 
                    name="amount" 
                    value={this.state.amount}
                    onChange={this.onAmountChange} />
                </td>
              </tr>
              <tr>
                <td>Recipient Address</td>
                <td>:</td>
                <td>
                  <input
                    type="text"
                    name="reciaddress"
                    value={this.state.toAddress}
                    onChange={this.onAddressChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <button type="submit" className="custom-btn rad_button">
                Send
              </button>
            </div>
          </div>
        </form>
        <form
          className="profile-details pt-5"
          {...(showing ? (
            <div class="mb-3">
              <table>
                <tbody>
                  <tr className="dflex">
                    <td>Another Address</td>
                    <td>:</td>
                    <td>
                      <div>sdfsdfdsfdsfsdfsdfsd</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null)}
        >
          <div className="row">
            <div className="col-md-12 text-center">
              <button
                type="submit"
                onClick={() => this.setState({ showing: !showing })}
                className="custom-btn rad_button"
              >
                Receive
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ExchangeForm);
