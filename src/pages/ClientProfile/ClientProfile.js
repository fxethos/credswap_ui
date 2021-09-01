import React, { useEffect } from "react";
import "./ClientProfile.scss";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ShowProfile from "../../components/ShowProfile/ShowProfile";

function ClientProfile(props) {
  const [editstate, editsetState] = React.useState(false);

  const handleEditClick = () => {
    console.log("onclick");
    editsetState(!editstate);
  };

  return (
    <div>
      {editstate ? (
        <ProfileForm handleEditClick={handleEditClick} />
      ) : (
        <ShowProfile handleEditClick={handleEditClick} />
      )}
    </div>
  );
}

export default ClientProfile;
