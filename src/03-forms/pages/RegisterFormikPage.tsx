import { Formik, Field, Form, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe de tener minimo 2 caracteres")
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato valido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Debe de tener minimo 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1"), null], "Passwords don't match")
            .min(6, "Debe de tener minimo 6 caracteres")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <label htmlFor="name"> Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
            <label htmlFor="email"> email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />
            <label htmlFor="password1"> password</label>
            <Field name="password1" type="password" />
            <ErrorMessage name="password1" component="span" />
            <label htmlFor="password2">Confirm password</label>
            <Field name="password2" type="password" />
            <ErrorMessage name="password2" component="span" />
            <button> Enviar</button>
            <button onClick={handleReset}> Limpiar formulario</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
