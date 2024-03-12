const pool = require('../db');

class TaskRepository {
  async findAll() {
    const query = 'SELECT * FROM tarefas';

    try {
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async create(task) {
    const { titulo, descricao, categoria } = task;
    const query = `INSERT INTO tarefas (titulo, descricao, categoria) VALUES ($1, $2, $3) RETURNING *`;
    const values = [titulo, descricao, categoria];

    try {
      const { rows } = await pool.query(query, values);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async update(id, task) {
    const { concluida } = task;
    const query = `UPDATE tarefas SET concluida = $1 WHERE id = $2`;
    const values = [concluida, id];

    try {
      await pool.query(query, values);
      return;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new TaskRepository();
