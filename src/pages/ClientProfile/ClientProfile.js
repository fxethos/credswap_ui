import React, { useEffect } from "react";
import "./ClientProfile.scss";
import { userphoneno } from "../../Helpers/APIHelper";

function ClientProfile() {
  const [editstate, editsetState] = React.useState(false);
  // const[var,setState]=React.useState({name:'',class:''})

  useEffect(() => {
    // profilesetState({ profilestate: true }, () => console.log(profilestate));
  }, []);

  const handleEditClick = () => {
    console.log("onclick");
    editsetState({ editstate: true });
  };

  return (
    <div>
      {editstate ? (
        <div className="profile-details p-1">
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
                    // value={fname}
                    // onChange={onChange}
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
                    // value={lname}
                    // onChange={onChange}
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
                    // value={lname}
                    // onChange={onChange}
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
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="profile-details p-1">
          <div className="row align-items-center mb-3">
            <div className="col-md-9 col-9">Profile Details</div>
            <div className="col-md-3 col-3 edit_icon">
              <button
                type="buttton"
                className="btn btn-primary"
                onClick={() => handleEditClick()}
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
                <td> ImDezCode</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>:</td>
                <td> imdezcode@gmail.com</td>
              </tr>

              <tr>
                <td>Email</td>
                <td>:</td>
                <td> email@tradala.tech</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>:</td>
                <td>{userphoneno}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ClientProfile;
