import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";
const ProductEdit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/products/${id}`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdate = async (product) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/products/${id}`,
        product
      );
      // Handle successful submission
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <ProductForm onSubmit={handleUpdate} initialValues={product} />
      <DeleteButton id={id} />
    </div>
  );
};

export default ProductEdit;
