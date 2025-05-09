import { useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ username, isLoggedIn, setUsername, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
