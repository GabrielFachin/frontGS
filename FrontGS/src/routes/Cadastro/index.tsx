import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import type { CadastroData } from "../../types/auth";

type CadastroForm = CadastroData & {
  confirmarSenha: string;
};

export default function Cadastro() {
  const navigate = useNavigate();
  const [cadastroMessage, setCadastroMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CadastroForm>();

  const senha = watch("senha");

  const onSubmit: SubmitHandler<CadastroForm> = async (data) => {
    try {
      const { confirmarSenha, ...cadastroData } = data;
      await api.cadastrar(cadastroData);
      
      setCadastroMessage("Cadastro realizado com sucesso!");
      setSuccess(true);
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setCadastroMessage("Erro ao cadastrar. Email já pode estar em uso.");
      setSuccess(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            Criar Conta
          </h1>
          <p className="text-gray-400">
            Comece sua jornada no Up'U hoje mesmo
          </p>
        </div>

        <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="nome" className="block text-sm font-medium text-gray-300">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                {...register("nome", {
                  required: "Nome é obrigatório",
                  minLength: { value: 3, message: "Mínimo de 3 caracteres" }
                })}
              />
              {errors.nome && (
                <p className="text-sm text-red-400">{errors.nome.message}</p>
              )}
            </div>

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
              <label htmlFor="dtNascimento" className="block text-sm font-medium text-gray-300">
                Data de nascimento
              </label>
              <input
                type="date"
                id="dtNascimento"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/20 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                {...register("dtNascimento", {
                  required: "Data de nascimento é obrigatória"
                })}
              />
              {errors.dtNascimento && (
                <p className="text-sm text-red-400">{errors.dtNascimento.message}</p>
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

            <div className="space-y-2">
              <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-300">
                Confirmar senha
              </label>
              <input
                type="password"
                id="confirmarSenha"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                {...register("confirmarSenha", {
                  required: "Confirmação de senha é obrigatória",
                  validate: (value) => value === senha || "As senhas não coincidem"
                })}
              />
              {errors.confirmarSenha && (
                <p className="text-sm text-red-400">{errors.confirmarSenha.message}</p>
              )}
            </div>

            {cadastroMessage && (
              <div className={`p-3 rounded-lg ${success ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                <p className={`text-sm text-center ${success ? 'text-green-400' : 'text-red-400'}`}>
                  {cadastroMessage}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-semibold shadow-lg shadow-purple-500/50"
            >
              Criar Conta
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-400">
                Já tem conta?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Faça login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}