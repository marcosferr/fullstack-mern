import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";
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
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-container">
            <Link to={`/${product._id}`}>{product.title}</Link>
            <DeleteButton id={product._id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
