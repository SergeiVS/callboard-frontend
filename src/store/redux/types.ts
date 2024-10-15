export interface SignInState {
  token: string | undefined
  isPending: boolean
  isLoggedOn: boolean
  error: string | undefined
}

export const RequestUrl: string = "http//localhost:8080"
