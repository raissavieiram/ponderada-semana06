import React, { useState, useEffect } from 'react';
require("dotenv").config();
import axios from 'axios';
import './App.css';

const backend_url = process.env.BACKEND_URL
const fetchTarefas = async () => {
  const response = await axios.get(`${backend_url}/tasks`);
  return response.data;
};

const createTarefa = async (tarefa) => {
  const response = await axios.post(`${backend_url}/tasks`, tarefa);
  return response.data;
};

const updateTarefa = async (id, tarefa) => {
  await axios.put(`${backend_url}/tasks/${id}`, tarefa);
};

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    fetchTarefas().then(setTarefas);
  }, []);

  const handleAddTarefa = async (e) => {
    e.preventDefault();
    const novaTarefa = { titulo, descricao, categoria };
    const tarefaCriada = await createTarefa(novaTarefa);
    setTarefas([...tarefas, tarefaCriada[0]]); 
    setTitulo('');
    setDescricao('');
    setCategoria('');
  };

  const handleMarcarConcluida = async (id) => {
    await updateTarefa(id, { concluida: true });
    const updatedTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    );
    setTarefas(updatedTarefas);
  };

  return (
    <div className="App">
      <h1>Tarefas</h1>
      <form onSubmit={handleAddTarefa}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.titulo} - {tarefa.descricao} - {tarefa.categoria} -{' '}
            {tarefa.concluida ? 'Concluída' : 'Pendente'}
            {!tarefa.concluida && (
              <button onClick={() => handleMarcarConcluida(tarefa.id)}>
                Marcar como Concluída
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
