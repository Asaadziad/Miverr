import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  const [products, setProducts] = useState<any>(null);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
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
