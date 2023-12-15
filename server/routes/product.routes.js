const {
  findAllProducts,
  findOneSingleProduct,
  createNewProduct,
  updateExistingProduct,
  deleteAnExistingProduct,
} = require("../controllers/product.controller");

const router = require("express").Router();

router.route("/").get(findAllProducts).post(createNewProduct);
router
  .route("/:id")
  .get(findOneSingleProduct)
  .put(updateExistingProduct)
  .delete(deleteAnExistingProduct);

module.exports = router;
