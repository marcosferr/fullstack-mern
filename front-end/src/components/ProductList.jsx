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

  const handleDelete = (productId) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/products/${productId}`)
      .then(() => {
        // Remove the deleted product from the products array
        setProducts(products.filter((product) => product._id !== productId));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {products.length === 0 && <div>No Products created yet</div>}
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/${product._id}`}>{product.title}</Link>
          <button onClick={() => handleDelete(product._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
