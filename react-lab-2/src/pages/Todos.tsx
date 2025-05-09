import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/useAuth"
import { v4 as uuidv4 } from "uuid"
import toast, { Toaster } from "react-hot-toast"

type Todo = {
  id: string
  text: string
}

const Todos = () => {
  const { username, setIsLoggedIn, setUsername } = useAuth()
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const handleAdd = () => {
    if (input.trim() === "") return
    const newTodo: Todo = { id: uuidv4(), text: input.trim() }
    setTodos([...todos, newTodo])
    setInput("")
    toast.success("New Task Added")
  }

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    toast.success("Task deleted")
  }

  const handleLogout = () => {
    setUsername("")
    setIsLoggedIn(false)
    navigate("/")
  }

 return (
  <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
    <Toaster position="top-right" />

    <div className="w-full max-w-md bg-neutral-700 p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-white text-xl font-bold">Welcome, {username}!</h1>
          <p className="text-sm text-neutral-300">Have a great and productive day!</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded border-[3px] border-black/0 hover:border-black hover:bg-red-700 transition-all duration-200 ease-in-out"
        >
          Logout
        </button>
      </div>

      <ul className="space-y-2 mb-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-neutral-500 text-white p-3 rounded"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded border-[3px] border-black/0 hover:border-black hover:bg-red-600 transition-all duration-200 ease-in-out"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 rounded border-[3px] border-black bg-neutral-800 text-white placeholder-neutral-400"
        />
        <button
          onClick={handleAdd}
          className="bg-black text-white px-4 py-2 rounded border-[3px] border-black/0 hover:border-white hover:text-white transition-all duration-200 ease-in-out"
        >
          Add Task
        </button>
      </div>
    </div>
  </div>
)

}

export default Todos
