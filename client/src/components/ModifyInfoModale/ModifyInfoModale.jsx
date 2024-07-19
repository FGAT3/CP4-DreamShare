import PropTypes from "prop-types";
import "./ModifyInfoModale.scss";
import { Form } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";

function ModifyInfoModale({
  handleClickModal,
  showModalModify,
  setShowModalModify,
  userInfos,
}) {
  const [formData, setFormData] = useState({
    firstname: userInfos.firstname,
    lastname: userInfos.lastname,
    pseudo: userInfos.pseudo,
    email: userInfos.email,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <dialog className="dialog" open>
      <Form method="put">
        <label>
          Firstname
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder={userInfos.firstname}
            className="placeholder"
          />
        </label>
        <label>
          Lastname
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder={userInfos.lastname}
            className="placeholder"
          />
        </label>
        <label>
          Pseudo
          <input
            type="text"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleChange}
            placeholder={userInfos.pseudo}
            className="placeholder"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={userInfos.email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mot de passe"
          />
        </label>
        <Button text="Apply changes" />
      </Form>
      <Button
        text="Cancel"
        onClick={handleClickModal(showModalModify, setShowModalModify)}
      />
    </dialog>
  );
}

ModifyInfoModale.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  showModalModify: PropTypes.bool.isRequired,
  setShowModalModify: PropTypes.func.isRequired,
  userInfos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModifyInfoModale;
