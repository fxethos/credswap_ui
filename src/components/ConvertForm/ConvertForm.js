import React from 'react';
import { withRouter } from 'react-router-dom';
import { spend } from '../../Helpers/APIHelper';

class ConvertForm extends React.Component {
    state = {
        coins: ''
    }
    onChange = (e) => {
        const coins = e.target.value;
        this.setState(() => ({coins}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onConvertRequest(parseInt(this.state.coins));
    }
    render() {
        return (
            <form className="profile-details p-1" onSubmit={this.onSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>Points to convert</td>
                        <td>:</td>
                        <td>
                        <input
                            type="text"
                            name="coins"
                            value={this.state.coins}
                            onChange={this.onChange}
                        />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary">
                        Convert
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(ConvertForm);