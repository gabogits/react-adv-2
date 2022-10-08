import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckBox } from "../components/";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-j"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placehoder="nombre"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placehoder="apellido"
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placehoder="email"
            />

            <MySelect label="job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
              <option value="it-j">IT-Junion</option>
              <option value="it-s">IT-Senior</option>
            </MySelect>

            <MyCheckBox label="Terms and conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
