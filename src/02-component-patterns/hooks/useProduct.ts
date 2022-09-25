import { useEffect, useRef, useState } from 'react';
import {  useProductArgs } from '../interfaces/interfaces';

export const useProduct = ({onChange, product, value=0, initialValues}:useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  //const isControlled = useRef(!!onChange) //significa si esto es true, 


  const isMounted = useRef(false)
  console.log(initialValues?.count)
  const increaseBy = (value: number) => {
  /*
    console.log("isControlled", isControlled.current)
    if(isControlled.current){
      return onChange!({count: value, product}) //onChange! esto es equivalente a poner arriba isControlled.current && onChange
    }
    */
  
    let newValue = Math.max(counter + value, 0); //Ccon esto se evita que ponga valores negativos
    
    /*Otra opcion
    if( initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount  );
    }
    setCounter(newValue)
    */

    newValue = Math.min(newValue, initialValues?.maxCount || newValue )
    setCounter(newValue);
    
    onChange && onChange({count: newValue, product});
  };

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
  
    if ( !isMounted.current ) return;
    else isMounted.current = true;
    console.log("eje")
    setCounter(value)
  }, [value])



  return {
    counter,
    maxCount:initialValues?.maxCount,  
    isMaxCountReached: !!initialValues?.count  && initialValues.maxCount === counter,
    increaseBy,
    reset
  }
}
