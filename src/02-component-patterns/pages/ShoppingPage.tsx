import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components/";
import "../styles/custom-styles.css";
import { Products } from "../data/products";
import useShopingCart from "../hooks/useShopingCart";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShopingCart();

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
        {Products.map((product) => (
          <ProductCard
            style={{ backgroundColor: "#107ec8" }}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            key={product.id}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" activeClass="holi" />
            <ProductTitle className="text-white" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "end" }}
            />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {/* funciona igual con Object.keys(shoppingCart).map(([key, product]) => ( */}
        {Object.keys(shoppingCart).map((key) => (
          <ProductCard
            key={key}
            style={{
              backgroundColor: "#107ec8",
              width: 100,
            }}
            product={shoppingCart[key]}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[key].count}
          >
            <ProductImage className="custom-image" />

            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};

export default ShoppingPage;
