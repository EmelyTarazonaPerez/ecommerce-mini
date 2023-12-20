export interface User {
  id?: number,
  name?: string,
  email: string,
  password: string,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserDTO extends Omit<User, 'id'>{}

