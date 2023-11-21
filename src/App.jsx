import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './redux/slice/todo'

import './App.css'

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  console.log(state)
  if (state.todo.isLoading) {
    return <center>
      <h2>Loading data......</h2>
    </center>
  }


  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())}>FetchTodo</button>

      {
        state.todo.data && state.todo.data.map(item => <li>{item.title}</li>)
      }
    </>
  )
}

export default App
