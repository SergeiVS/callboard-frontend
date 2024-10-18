import axios from "axios"

export interface SignInState {
  user: User | undefined
  isPending: boolean
  isLoggedOn: boolean
  error: string | undefined
}

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  roles: string[]
}
