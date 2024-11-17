const TaskService = require("../task/task.service");
const CategoryRepository = require("./category.repository");

class CategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.taskService = new TaskService();
  }

  async createCategory(data) {
    const { name } = data;
    const category = await this.categoryRepository.createTask({ name });
    return category;
  }

  async updateCategory(data) {
    const { id, ...req } = data;
    const updatedCategory = await this.categoryRepository.updateCategory(id, {
      ...req,
    });
    return updatedCategory.dataValues;
  }

  async getCategoriesByUser(userId) {
    const categories = await this.categoryRepository.getCategoriesByUser(
      userId
    );
    return categories;
  }

  async deleteCategory(id) {
    const tasksWithCategory = await this.taskService.getTaskByCategoryId(id);

    if (tasksWithCategory && tasksWithCategory.length > 0) {
      tasksWithCategory.forEach((task) => {
        if (task.categories.length === 1 && task.categories[0].id === id) {
          this.taskService.deleteTask(task.id);
        } else {
          task.categories = task.categories.filter(
            (category) => category.id !== id
          );
          this.taskService.updateTask(task);
        }
      });
    }

    const category = await this.categoryRepository.deleteCategory(id);

    return category;
  }
}

module.exports = CategoryService;
