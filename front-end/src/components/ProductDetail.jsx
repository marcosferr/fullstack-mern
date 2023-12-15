import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/products/${id}`
        );

        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleEdit = () => {
    navigate(`/${id}/edit`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detailed">
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <div className="button-group">
        <Button onClick={handleEdit} endIcon={<EditIcon />}>
          Edit
        </Button>
        <DeleteButton id={id} />
      </div>
    </div>
  );
};

export default ProductDetail;
