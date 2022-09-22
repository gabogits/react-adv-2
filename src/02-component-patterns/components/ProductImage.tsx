import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { PropsImg } from "../interfaces/interfaces";

export const ProductImage = ({
  img = "",
  className,
  activeClass,
}: PropsImg) => {
  const { product } = useContext(ProductContext);

  let imgtoShow: string;
  if (img) {
    imgtoShow = img;
  } else if (product.img) {
    imgtoShow = product.img;
  } else {
    imgtoShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className} ${activeClass}`}
      src={imgtoShow}
      alt="Product imge"
    />
  );
};
