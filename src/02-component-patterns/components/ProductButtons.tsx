import { useCallback, useContext, useRef, useEffect } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import { PropsButtons } from "../interfaces/interfaces";

export const ProductButtons = ({ className, style }: PropsButtons) => {
  //TODO extraer maxCount

  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  //TODO isMaxReached = useCallback, [counter, maxCount]
  //true si es maxcount

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount, //tiene que regresar un simpre un  true o un false no un undefined
    [counter, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd}  ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
