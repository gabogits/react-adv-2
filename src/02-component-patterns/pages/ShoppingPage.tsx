import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components/";

import { products } from "../data/products";

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>

      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          product={products[0]}
          key={products[0].id}
          initialValues={{
            count: 4,
          }}
        >
          {({ reset, increaseBy, isMaxCountReached, count }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
