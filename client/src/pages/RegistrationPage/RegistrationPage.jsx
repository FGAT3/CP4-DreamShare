import { Form, Link } from "react-router-dom";
import "./RegistrationPage.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import inputFields from "../../services/inputFields";
import Button from "../../components/Button/Button";

function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <h1 className="registration-title">Registration</h1>
      <Form method="post" className="registration-form">
        {inputFields.map((field) => (
          <>
            <label
              key={field.id}
              className="label-registration"
              htmlFor={field.id}
            >
              {field.label}
              {field.id === "password" && (
                <FontAwesomeIcon
                  onClick={toggleShowPassword}
                  className="password-toggle-icon"
                  icon={showPassword ? faEyeSlash : faEye}
                />
              )}
            </label>
            <input
              className="input-registration"
              type={
                field.id === "password" && showPassword ? "text" : field.type
              }
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              pattern={field.pattern}
              minLength={field.minLength}
              required={field.required}
            />
          </>
        ))}
        <Button text="Validate" color="green"/>
        <Link to="/login" className="button">
          Already an account ?
        </Link>
      </Form>
    </main>
  );
}

export default RegistrationPage;
