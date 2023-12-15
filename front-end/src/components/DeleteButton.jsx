import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const DeleteButton = ({ id }) => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`);
      console.log("Product deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Button
      variant="outlined"
      color="error"
      onClick={handleDelete}
      endIcon={<DeleteIcon />}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
