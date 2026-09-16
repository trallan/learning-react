import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [nextId, setNextId] = useState(0);
  const [data, setData] = useState([])

  function addTodo() {
    setData(prevData => [
      ...prevData,
      {id: nextId + 1, text: inputValue, completed: false}
    ]);

    setNextId(prevId => prevId + 1)
    setInputValue("")
  }

  function deleteTodo(id) {
    setData(prevData =>
      prevData.filter(todo => todo.id !== id)
    )
  }

  function updateTodo(id, newText) {
    setData(
      data.map(todo =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
    setInputValue("")
  }

  function completeTodo(id) {
    setData(
      data.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <>

    <section>
      <h1>Hello World!</h1>
      <p>Let's make a todo app.</p>
    </section>

    <section>
      <ol className="order-list">
        <li>Add input field</li>
        <li>Add table with all the todo's</li>
        <li>Store data (in memory for now)</li>
        <li>Edit data</li>
        <li>Delete data</li>
        <li>Add filter for completed todo's</li>
      </ol>
    </section>
     
    <section id="todo-section">
      <div id="add-todo">
        <label htmlFor="addTodo">Add Todo</label>
        <input 
          type="text" 
          id="addTodo" 
          name="addTodo" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addTodo}>Submit</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
            <th>Completed</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map(todo =>
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td>{todo.completed ? "True" : "False"}</td>
              <td id="table-col-options">
                <button onClick={() => deleteTodo(todo.id)}>x</button>
                <button onClick={() => updateTodo(todo.id, inputValue)}>e</button>
                <button onClick={() => completeTodo(todo.id)}>c</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>

    </>
  )
}

export default App
