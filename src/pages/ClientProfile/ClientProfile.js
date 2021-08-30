import React from "react";
import "./ClientProfile.scss";

function ClientProfile() {
  // const ToggleElement = () => {
  //   const [isShow, setIsShow] = React.useState(true);
  // };
  const handleEditClick = () => {
    alert("im working");
    // setIsShow(!isShow);
  };

  return (
    <div>
      <div class="profile-details p-1">
        <div class="row align-items-center mb-3">
          <div class="col-md-9 col-9">Profile Details</div>
          <div class="col-md-3 col-3 edit_icon">
            <button
              type="buttton"
              class="btn btn-primary"
              onClick={handleEditClick}
            >
              <i class="fas fa-user-edit edit1"></i>
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
              <td> 9096778777</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="profile-details p-1">
        <div class="row align-items-center mb-3">
          <div class="col-md-12">Edit Profile Details</div>
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
                  value="9876543123"
                  // onChange={onChange}
                  placeholder="987654333"
                  readonly
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row mt-3">
          <div class="col-md-12 text-center">
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
