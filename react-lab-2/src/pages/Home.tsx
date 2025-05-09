import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/useAuth"

const Home = () => {
  const [nameInput, setNameInput] = useState("")
  const navigate = useNavigate()
  const { setUsername, setIsLoggedIn } = useAuth()

  const handleLogin = () => {
    if (nameInput.trim() === "") return
    setUsername(nameInput.trim())
    setIsLoggedIn(true)
    navigate("/todos")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-6">Hi, What´s your name?</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded mb-4 w-full max-w-xs"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full max-w-xs"
      >
        Login
      </button>
    </div>
  )
}

export default Home
