declare module '#auth-utils' {
  interface User {
    id: number
    email: string
  }

  interface UserSession {
    user: User
  }

  // Interface SecureSessionData {

  // }
}

export {}
