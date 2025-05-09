import { createContext } from "react"

export type AuthContextType = {
  username: string
  isLoggedIn: boolean
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextType>({
  username: "",
  isLoggedIn: false,
  setUsername: () => {},
  setIsLoggedIn: () => {},
})
