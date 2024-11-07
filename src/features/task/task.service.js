const TaskRepository = require("./task.repositoty");

class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async createTask(data) {
    const { description, status, assignedTo, user_id, category_id } = data;
    const task = await this.taskRepository.createTask({
      description,
      status,
      assignedTo,
      user_id,
      category_id,
    });
    return task;
  }

  async updateTask(data) {
    const { id, ...req } = req.body;
    const updatedTask = await this.taskRepository.updateUser(id, {...req});
    return updatedTask.dataValues;
  }

  async getTasksByUser(userId) {
    const tasks = await this.taskRepository.getTasksByUser(userId);
    return tasks;
  }

  async deleteTask(id) {
    const task = await this.taskRepository.deleteTask(id);
    return task;
  }
}

module.exports = TaskService;
