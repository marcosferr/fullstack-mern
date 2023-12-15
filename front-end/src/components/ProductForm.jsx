import React, { useState } from "react";
import axios from "axios";
const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_BACKEND_URL);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/products`,
        formData
      );

      if (response.status === 200) {
        // Handle successful submission
        console.log("Product submitted successfully!");
      } else {
        // Handle submission error
        console.error("Failed to submit product");
      }
    } catch (error) {
      console.error("An error occurred while submitting the product", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
