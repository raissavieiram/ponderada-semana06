const TaskRepository = require('../repositories/TaskRepository');

class TaskController {
    async getAll(_req, res) {
        const tasks = await TaskRepository.findAll();
        res.json(tasks);
    }

    async create(req, res) {
        const newTask = await TaskRepository.create(req.body);
        res.status(201).json(newTask);
    }

    async update(req, res) {
        const { id } = req.params; 
        const taskToUpdate = req.body;
      
        try {
          await TaskRepository.update(id, taskToUpdate);
          res.status(200).json({ message: "Tarefa atualizada com sucesso!" });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

}

module.exports = new TaskController();