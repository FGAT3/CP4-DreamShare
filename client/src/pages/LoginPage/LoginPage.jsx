import { Form, Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import inputFields from "../../services/inputFields";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginFields = inputFields.filter(field =>
    ["email", "password"].includes(field.id)
  );

  return (
    <main>
      <h1>Login</h1>
      <Form method="post">

        {loginFields.map((field) => (
          <>
            <label className="label-login" htmlFor={field.id}>
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
              className="input-login"
              type={field.id === "password" && showPassword ? "text" : field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              pattern={field.pattern}
              minLength={field.minLength}
              required={field.required}
            />
          </>
        ))}
      <Button text="Login"/>
        <Link to="/registration" className="button">
          Create an account
        </Link>
      </Form>
    </main>
  );
}

export default LoginPage;
