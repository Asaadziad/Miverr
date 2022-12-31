import { FunctionComponent } from "react";
import Navbar from "../navbar/Navbar";
import Products from "./Products/Products";

interface ShopProps {}

const Shop: FunctionComponent<ShopProps> = () => {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
};

export default Shop;
