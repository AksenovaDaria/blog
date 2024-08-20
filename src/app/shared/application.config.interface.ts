export interface IArtical {
  id: string,
  title: string,
  categories: string[];
  content: string;
  date?: any
}

export interface IRegistration {
  name: string,
  regular: string,
  error: string,
  description: string,
}

export interface IUser {
  nickname: string,
  name: string,
  password: string,
  email: string
}
