import { useEffect, useRef, useState } from 'react';
import {  useProductArgs } from '../interfaces/interfaces';

export const useProduct = ({onChange, product, value=0}:useProductArgs) => {
  const [counter, setCounter] = useState(value);
  //const isControlled = useRef(!!onChange) //significa si esto es true, 


  const increaseBy = (value: number) => {
  /*
    console.log("isControlled", isControlled.current)
    if(isControlled.current){
      return onChange!({count: value, product}) //onChange! esto es equivalente a poner arriba isControlled.current && onChange
    }
    */
  
    const newValue = Math.max(counter + value, 0); //Ccon esto se evita que ponga valores negativos
    setCounter(newValue); 
    onChange && onChange({count: newValue, product});
  };

  useEffect(() => {
    setCounter(value)
  }, [value])
  
  return {
    counter,
    increaseBy
  }
}
