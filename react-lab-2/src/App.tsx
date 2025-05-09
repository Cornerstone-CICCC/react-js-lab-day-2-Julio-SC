import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/useAuth"
import Home from "./pages/Home"
import Todos from "./pages/Todos"

const App = () => {
  const { isLoggedIn } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/todos"
        element={isLoggedIn ? <Todos /> : <Navigate to="/" replace />}
      />
    </Routes>
  )
}

export default App
