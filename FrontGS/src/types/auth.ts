export interface User {
  idUsuario?: number;
  nome: string;
  email: string;
  senha?: string;
  dtNascimento: string;
}

export interface LoginData {
  email: string;
  senha: string;
}

export interface CadastroData {
  nome: string;
  email: string;
  senha: string;
  dtNascimento: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}