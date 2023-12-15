const express = require("express");
const cors = require("cors");
require("dotenv").config({
  path: "./config/.env",
});

const productRoutes = require("./routes/product.routes");

const app = express();
app.use(cors());
app.use(express.json());

require("./config/mongoose.config");

app.use("/api/v1/products", productRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening at Port ${process.env.PORT || 3000}`);
});
