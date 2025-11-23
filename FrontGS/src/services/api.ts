import type { User, LoginData, CadastroData, LoginResponse } from '../types/auth';

const API_URL = 'https://java-jdbc-zry5.onrender.com';

interface ApiError {
  message: string;
  status?: number;
}

const handleApiError = (error: unknown): never => {
  if (error instanceof Error) {
    throw error;
  }
  throw new Error('Erro desconhecido na API');
};

export const api = {
  async cadastrar(data: CadastroData): Promise<User> {
    try {
      const response = await fetch(`${API_URL}/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar');
      }

      return await response.json() as User;
    } catch (error) {
      console.error('Erro no cadastro:', error);
      return handleApiError(error);
    }
  },

  async login(data: LoginData): Promise<LoginResponse> {
    try {
      const response = await fetch(`${API_URL}/usuario`);
      const usuarios = await response.json() as User[];

      const usuarioEncontrado = usuarios.find(
        (u: User) => u.email === data.email && u.senha === data.senha
      );

      if (usuarioEncontrado) {
        return {
          token: '123',
          user: {
            idUsuario: usuarioEncontrado.idUsuario,
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            dtNascimento: usuarioEncontrado.dtNascimento
          }
        };
      }
      
      throw new Error('Credenciais inválidas');
    } catch (error) {
      console.error('Erro no login:', error);
      return handleApiError(error);
    }
  },

  async atualizar(idUsuario: number, data: Partial<User>): Promise<User | null> {
    try {
      const response = await fetch(`${API_URL}/usuario/${idUsuario}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        console.error('Resposta não ok ao atualizar:', response.status);
        return null;
      }

      const updatedUser = await this.buscarPorId(idUsuario);
      return updatedUser;
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      return null;
    }
  },

  async deletar(idUsuario: number): Promise<boolean> {
    try {
      const response = await fetch(`${API_URL}/usuario/${idUsuario}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });

      return response.ok;
    } catch (error) {
      console.error('Erro ao deletar:', error);
      return false;
    }
  },

  async buscarPorId(idUsuario: number): Promise<User> {
    try {
      const response = await fetch(`${API_URL}/usuario/${idUsuario}`);

      if (!response.ok) {
        throw new Error('Erro ao buscar usuário');
      }

      return await response.json() as User;
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return handleApiError(error);
    }
  },

  async buscarPorEmail(email: string): Promise<User> {
    try {
      const response = await fetch(`${API_URL}/usuario`);

      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }

      const usuarios = await response.json() as User[];
      const usuario = usuarios.find((u: User) => u.email === email);

      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }

      return usuario;
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return handleApiError(error);
    }
  },

  async listar(): Promise<User[]> {
    try {
      const response = await fetch(`${API_URL}/usuario`);

      if (!response.ok) {
        throw new Error('Erro ao listar usuários');
      }

      return await response.json() as User[];
    } catch (error) {
      console.error('Erro ao listar:', error);
      return handleApiError(error);
    }
  }
};
