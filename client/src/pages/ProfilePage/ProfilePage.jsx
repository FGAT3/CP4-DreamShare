import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// import addCircle from "../../assets/images/icon/add-circle.svg";
import Button from "../../components/Button/Button";

import "./ProfilePage.scss";
import ModifyInfoModale from "../../components/ModifyInfoModale/ModifyInfoModale";
import DeleteInfoModale from "../../components/DeleteInfoModale/DeleteInfoModale";

const BASE_URL = import.meta.env.VITE_API_URL;

function ProfilePage() {
  const userData = useLoaderData();
  const navigate = useNavigate();

  const [showModalModify, setShowModalModify] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const { logout } = useAuth();

  const handleClickLogout = () => {
    logout();
    navigate("/");
  };

  const handleClickModal = (booleanState, setBooleanState) => () => {
    setBooleanState(!booleanState);
  };

  return (
    <main>
      <h1>Profile</h1>
      <img
        src={`${BASE_URL}/avatar/${userData.avatar_image}`}
        alt=""
        className="profile-avatar"
      />
      <h2>{userData.pseudo}</h2>
      <Button
        text="Logout"
        className="button-logout"
        onClick={handleClickLogout}
      />
      <Button
        text="Modify my informations"
        color="orange"
        className="button-modify"
        onClick={handleClickModal(showModalModify, setShowModalModify)}
      />
      <Button
        text="Delete my account"
        color="red"
        className="button-delete"
        onClick={handleClickModal(showModalDelete, setShowModalDelete)}
      />
      {showModalModify && (
        <ModifyInfoModale
          handleClickModal={handleClickModal}
          showModalModify={showModalModify}
          setShowModalModify={setShowModalModify}
          userInfos={userData}
        />
      )}
      {showModalDelete && (
        <DeleteInfoModale
          handleClickModal={handleClickModal}
          showModalDelete={showModalDelete}
          setShowModalDelete={setShowModalDelete}
        />
      )}
      <h2 className="profile-dream">My dreams</h2>
    </main>
  );
}

export default ProfilePage;
