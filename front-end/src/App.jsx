import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import axios from "axios";
import { Paper } from "@mui/material";
function App() {
  const handleCreate = async (product) => {
    console.log(import.meta.env.VITE_BACKEND_URL);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/products`,
        product
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
  return (
    <>
      <Paper elevation={1}>
        <ProductForm onSubmit={handleCreate} />
        <ProductList />
      </Paper>
    </>
  );
}

export default App;
