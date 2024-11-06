import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffect } from 'react'

import Tarefa from './assets/tarefa'
import Titulo from './assets/Titulo'
import Botao from './assets/Botao'


function App() {

  let [tarefas, setTarefas] = useState([
    {id: 1, item: 'Estudar React'},
    {id: 2, item: 'Fazer excercícios'},
    {id: 3, item: 'Ler um Livro'}
  ]);

  let [novaTarefa, setNovaTarefa] = useState('')

  const adicionarTarefa = () => {
    const nova = { id: tarefas.length + 1, item: novaTarefa}

    setTarefas([...tarefas, nova])
    setNovaTarefa('')
  }

  

  return (
    <div>
      <h1>Gerenciador de Tarefas 📝</h1>

      <Titulo texto='Lista de Tarefas'/>

      <ul>

      {/* {tarefas.map((tarefa, index) => (
        <li key={tarefa.id}>{tarefa.item}</li>
      ))} ---> Assim, esou criando a partir de um componente qualquer*/}

      {/* Utilizando o meu próprio componente */}

      {tarefas.map((tarefa) => (

        <Tarefa key={tarefa.id} nome={tarefa.item}/>

      ))}

      </ul>

      <input 
        type="text" 
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder='Adicionar Nova Tarefa'    
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

    </div>
  );
}

export default App
