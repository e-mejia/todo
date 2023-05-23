import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todoform from "./components/Todoform";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = React.useState("");
  const [todoarr, setTodoarr] = React.useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!input) {
      alert("Please enter a task!");
      return;
    }

    const newTodo = {
      id: uuidv4(),
      text: input,
    };

    setTodoarr((prevtodo) => [...prevtodo, newTodo]);
    setInput("");
  }

  function deleteTodo(id) {
    setTodoarr(todoarr.filter((item) => item.id !== id));
  }

  function handleEdit(id) {
    for (let i = 0; i < todoarr.length; i++) {
      if (todoarr[i].id === id) {
        setInput(todoarr[i].text);
        break;
      }
    }
    deleteTodo(id);
  }

  return (
    <div className="App">
      <div>
        <Header />
        <Todoform
          inputvalue={input}
          onSubmit={handleSubmit}
          onChange={handleChange}
          todo={todoarr}
          onDelete={deleteTodo}
          onEdit={handleEdit}
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
