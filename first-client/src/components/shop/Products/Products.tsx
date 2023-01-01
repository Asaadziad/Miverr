import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  const [products, setProducts] = useState<any>(null);
  async function getProducts() {
    const res = await axios
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mt-5">
      {products?.map((item: any) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
};

export default Products;
