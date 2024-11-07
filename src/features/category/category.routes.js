const { Router } = require("express");
const verifyToken = require("../../midlewares/auth-midleware");
const CategoryController = require("./category.contoller");

const router = Router();

router
  .route("/categories")
  .get(CategoryController.getCategoryByUser)
  .post(CategoryController.createCategory);

router
  .route("/categories/:id")
  .delete(CategoryController.deleteCategory);

router.route("/categories/update").patch(CategoryController.updateCategory);

module.exports = router;
