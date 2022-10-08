import { useField, ErrorMessage } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}> {label}</label>
      <input className="text-input" {...field} {...props} />
      {/*meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )*/}
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span"
      />
    </>
  );
};

export default MyTextInput;