import { ProductInCart, Product } from '../interfaces/interfaces';
import { useState } from 'react';
const useShopingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
      }>({});
    
      //[key: string] esto significa que pueden llegar n cantidad de llaves ( key)
      /*
    {
        "1": { ...product, count: 10 },
        "2": { ...product, count: 10 },
      }*/
    
      const onProductCountChange = ({
        count,
        product,
      }: {
        count: number;
        product: Product;
      }) => {
        setShoppingCart((oldShoppingCart) => {
           /*
          const productInCart: ProductInCart = oldShoppingCart[product.id] || {
            ...product,
            count: 0,
          };
    
          if (Math.max(productInCart.count + count, 0) > 0) {
            //esta condicion es por que podria estar decrementando y dejarlo en 0
            //dicho de otra manera este articulo y existe y tiene más de una unidad
            productInCart.count += count;
            return {
              ...oldShoppingCart,
              [product.id]: productInCart,
            };
          }
          delete oldShoppingCart[product.id];
          return {
            ...oldShoppingCart,
          };
         */
          if (count === 0) {
            delete oldShoppingCart[product.id];
            // const { [product.id]: todelete, ...rest } = oldShoppingCart; otra alternativa
            return {
              ...oldShoppingCart,
            };
          }
          return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
          };
        });
      };
    return {
        shoppingCart,
        onProductCountChange
    }
}

export default useShopingCart;