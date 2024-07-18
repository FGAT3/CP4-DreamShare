const inputFields = [
  {
    id: "firstname",
    label: "Firstname",
    type: "text",
    placeholder: "Firstname",
    required: true,
  },
  {
    id: "lastname",
    label: "Lastname",
    type: "text",
    placeholder: "Lastname",
    required: true,
  },
  {
    id: "pseudo",
    label: "Pseudo",
    type: "text",
    placeholder: "Pseudo",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    pattern: "^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$",
    required: true,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*\\-]).{8,}$",
    minLength: 8,
    required: true,
  },
];

export default inputFields;
