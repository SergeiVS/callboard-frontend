export interface SignInFormProps{
    onSubmit:()=>void
}

export interface UserUpdateRequest{
    userId: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
}