import PropTypes from "prop-types";
import "./DeleteInfoModale.scss";
import { Form } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../Button/Button";

function DeleteInfoModale({
  handleClickModal,
  showModalDelete,
  setShowModalDelete,
}) {
  const { logout } = useAuth();
  return (
    <dialog open className="modalDelete">
      <p>
        Do you really want to delete your account ?
      </p>
      <Button
        text="Cancel"
        color="green"
        onClick={handleClickModal(showModalDelete, setShowModalDelete)}
      />
      <Form method="DELETE" className="deleteForm">
        <Button text="Delete my account" color="red" onClick={logout} />
      </Form>
    </dialog>
  );
}

DeleteInfoModale.propTypes = {
  handleClickModal: PropTypes.func.isRequired,
  showModalDelete: PropTypes.bool.isRequired,
  setShowModalDelete: PropTypes.func.isRequired,
};

export default DeleteInfoModale;
