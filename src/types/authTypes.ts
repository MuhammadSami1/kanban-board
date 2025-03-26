export type tSignUp = {
  uid?: string | undefined
  name: string
  email: string
  password: string
}

export type tSignIn = {
  email: string
  password: string
}
export type tSignInRequest = {
  email: string
  idToken: string
}
