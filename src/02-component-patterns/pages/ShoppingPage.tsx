import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components/";
import "../styles/custom-styles.css";
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
          style={{ backgroundColor: "#107ec8" }}
          product={products[0]}
          className="bg-dark"
          key={products[0].id}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, increaseBy, isMaxCountReached, count }) => (
            <>
              <ProductImage className="custom-image" activeClass="holi" />
              <ProductTitle className="text-white" />
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "end" }}
              />
              <button onClick={reset}>reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>{count}</span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
