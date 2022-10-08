import { useState, ChangeEvent } from 'react';




export const useForm = <T>(initialValues:T) => {
    const [formData, setFormData] = useState(initialValues);
    
      const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name);
    
        const { name, value } = event.target;
    
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const resetForm = () => {
        setFormData(initialValues)
      }
    

      const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  return {
    ...formData,
    resetForm,
    isValidEmail,
    onChange
  }
}
