import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {products.length === 0 && <div>No Products created yet</div>}
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
