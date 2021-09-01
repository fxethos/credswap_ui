import React, { useEffect, useState } from 'react';
import { userphoneno, getUser } from "../../Helpers/APIHelper";

const ShowProfile = (props) => {
    const storedUser = localStorage.getItem("user");
    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : {})
    useEffect(() => {
        if (Object.entries(user).length === 0) {
            getUser().then(data => {
                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));
            });
        }
    }, [user]);
    return (
        <div className="profile-details p-1">
          <div className="row align-items-center mb-3">
            <div className="col-md-9 col-9">Profile Details</div>
            <div className="col-md-3 col-3 edit_icon">
              <button
                type="buttton"
                className="btn btn-primary"
                onClick={() => props.handleEditClick()}
              >
                <i className="fas fa-user-edit edit1"></i>
              </button>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>:</td>
                <td>{user.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>:</td>
                <td> {user.last_name}</td>
              </tr>

              <tr>
                <td>Email</td>
                <td>:</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>{userphoneno}</td>
              </tr>
              <tr>
                <td>Coins</td>
                <td>:</td>
                <td>{user.coins}</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
}

export default ShowProfile;