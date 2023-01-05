import { FunctionComponent } from "react";

import Products from "./Products/Products";

interface ShopProps {}

const Shop: FunctionComponent<ShopProps> = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default Shop;
