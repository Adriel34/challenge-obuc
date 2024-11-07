const CategoryRepository = require("./category.repository");

class CategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async createCategory(data) {
    const { name } = data;
    const category = await this.categoryRepository.createTask({name});
    return category;
  }

  async updateCategory(data) {
    const { id, ...req } = data;
    const updatedCategory = await this.categoryRepository.updateCategory(id, {...req});
    return updatedCategory.dataValues;
  }

  async getCategoriesByUser(userId) {
    const categories = await this.categoryRepository.getCategoriesByUser(userId);
    return categories;
  }

  async deleteCategory(id) {
    const category = await this.categoryRepository.deletecategory(id);
    return category;
  }
}

module.exports = CategoryService;
