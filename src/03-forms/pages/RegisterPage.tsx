import "../styles/styles.css";
import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
const initialValues = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};
export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm(initialValues);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, email, password1, password2);
  };
  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

        <input
          onChange={onChange}
          value={email}
          name="email"
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>No es un email valido</span>}

        <input
          onChange={onChange}
          value={password1}
          name="password1"
          type="password"
          placeholder="Password"
        />
        {password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraeña tiene menos de 6 caracteres</span>
        )}
        <input
          onChange={onChange}
          value={password2}
          name="password2"
          type="password"
          placeholder="Password"
        />
        {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben ser iguales</span>
        )}
        <button value={password2} type="submit">
          Create
        </button>

        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};
