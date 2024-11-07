const Category = require('../category/category.model');
const Task = require('./task.model');

class TaskRepository {
  async createTask(data, categoryIds) {
    const task = await Task.create(data);
    
    await task.addCategories(categoryIds);
    
    return task;
  }


    async getTasksByUser(userId) {
        return Task.findAll({
          where: {
            user_id: userId,
          },
          include: [{
            model: Category,
            as: 'categories',
            through: { attributes: [] }, 
          }],
        });
      }

    async updateTask(id, data) {
        const task = await Task.findByPk(id);  
        return task.update(data);
    }

    async deleteTask(id) {
        const user = await Task.findByPk(id);
        return user.destroy();
    }

}

module.exports = TaskRepository;
