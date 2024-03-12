const { Router } = require('express');

const TaskController = require('../controllers/TaskController');

const router = Router();

router
  .get('/tasks', TaskController.getAll)
  .post('/tasks', TaskController.create)
  .put('/tasks/:id', TaskController.update);

module.exports = router;
