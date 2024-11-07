const TaskService = require("./task.service");

class TaskController {
  taskService = new TaskService();

  createTask = async (req, res)  => {
    const task = await this.taskService.createTask(req.body);
    return res.json(task);
  };

  updateTask = async (req, res) => {
    const updatedTask = await this.taskService.createTask(req.body);
    return res.json(updatedTask);
  };

  getTasksByUser = async (req, res) => {
    const { id } = req.params;
    
    const user = await this.taskService.getTasksByUser(id);
    return res.json(user);
  };

  deleteTask = async (req, res) => {
    const { id } = req.params;
    const task = await this.taskService.deleteTask(id);
    return res.json(task);
  };
}

module.exports = new TaskController();
