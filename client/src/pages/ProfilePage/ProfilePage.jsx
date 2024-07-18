import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// import addCircle from "../../assets/images/icon/add-circle.svg";
import Button from "../../components/Button/Button";

import "./ProfilePage.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function ProfilePage() {
  const userData = useLoaderData();
  const navigate = useNavigate();

  // console.log(userData);

  const { logout } = useAuth();

  const handleClickLogout = () => {
    logout();
    navigate("/");
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
        text="Modify my informations"
        color="orange"
        className="button-modify"
      />
      <Button
        text="Delete my account"
        color="red"
        className="button-delete"
        onClick={handleClickLogout}
      />
      <h2 className="profile-dream">My dreams</h2>
    </main>
  );
}

export default ProfilePage;
