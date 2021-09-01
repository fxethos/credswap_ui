import React from 'react';
import { withRouter } from 'react-router-dom';
import { userphoneno, createUser } from "../../Helpers/APIHelper";

class ProfileForm extends React.Component {
    componentDidMount() {
        const storedUser = localStorage.getItem("user");
        if(!!storedUser) {
            const {first_name, last_name, email} = JSON.parse(storedUser);
            this.setState(() => ({
                first_name,
                last_name,
                email
            }));
        }
    }
    state = {
        first_name: '',
        last_name: '',
        email: ''
    }
    onFirstNameChange = (e) => {
        const first_name = e.target.value;
        this.setState(() => ({first_name}));
    }
    onLastNameChange = (e) => {
        const last_name = e.target.value;
        this.setState(() => ({last_name}));
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({email}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        createUser(this.state).then(res => {
            if (res) {
                this.props.handleEditClick();
                this.props.history.push('/client-dashboard');
            }
        })
    }
    render() {
        return (
            <form className="profile-details p-1" onSubmit={this.onSubmit}>
                <div className="row align-items-center mb-3">
                    <div className="col-md-12">Edit Profile Details</div>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>:</td>
                        <td>
                        <input
                            type="text"
                            name="firstname"
                            value={this.state.first_name}
                            onChange={this.onFirstNameChange}
                            placeholder="First Name"
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>:</td>
                        <td>
                        <input
                            type="text"
                            name="lastname"
                            value={this.state.last_name}
                            onChange={this.onLastNameChange}
                            placeholder="Last Name"
                        />
                        </td>
                    </tr>

                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>
                        <input
                            type="text"
                            name="lastname"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            placeholder="Email@tradala.tech"
                        />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>:</td>
                        <td>
                        <input
                            type="text"
                            name="lastname"
                            value={userphoneno}
                            readOnly
                        />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(ProfileForm);