import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import type { LoginData } from "../../types/auth";

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const response = await api.login(data);
      
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/");
        window.location.reload();
      } else {
        setLoginError("Email ou senha incorretos");
      }
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error.message || "Erro ao fazer login. Tente novamente.");
      } else {
        setLoginError("Erro ao fazer login. Tente novamente.");
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            Bem-vindo de volta
          </h1>
          <p className="text-gray-400">
            Entre com suas credenciais para continuar
          </p>
        </div>

        <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="seu.email@exemplo.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email inválido"
                  }
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="senha" className="block text-sm font-medium text-gray-300">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                {...register("senha", {
                  required: "Senha é obrigatória",
                  minLength: { value: 6, message: "Mínimo de 6 caracteres" }
                })}
              />
              {errors.senha && (
                <p className="text-sm text-red-400">{errors.senha.message}</p>
              )}
            </div>

            {loginError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-sm text-red-400 text-center">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-semibold shadow-lg shadow-purple-500/50"
            >
              Entrar
            </button>

            <p className="text-center text-sm text-gray-400">
              Não tem conta?{' '}
              <button
                type="button"
                onClick={() => navigate('/cadastro')}
                className="text-cyan-400 hover:underline"
              >
                Cadastre-se
              </button>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
