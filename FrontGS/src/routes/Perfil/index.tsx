import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import type { User } from "../../types/auth";

type PerfilForm = {
  nome: string;
  dtNascimento: string;
};

export default function Perfil() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PerfilForm>();

  const normalizeDate = (value?: string) => {
    if (!value) return "";
    if (value.includes("/")) {
      const parts = value.split("/");
      if (parts.length === 3) {
        const [d, m, y] = parts;
        return `${y.padStart(4, "0")}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
      }
    }
    if (value.includes("T")) return value.slice(0, 10);
    if (value.length >= 10) return value.slice(0, 10);
    return value;
  };

  const formatDateForDisplay = (value?: string) => {
    if (!value) return "Não informado";
    const normalized = normalizeDate(value);
    if (!normalized || normalized.length < 10) return value;
    
    const [year, month, day] = normalized.split("-");
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData) as User;
      setUser(parsedUser);
      reset({
        nome: parsedUser.nome,
        dtNascimento: normalizeDate(parsedUser.dtNascimento)
      });
    } else {
      navigate("/login");
    }
  }, [navigate, reset]);

  const onSubmit: SubmitHandler<PerfilForm> = async (data) => {
    if (!user?.idUsuario) return;

    try {
      const payload = {
        nome: data.nome,
        email: user.email,
        senha: user.senha,
        dtNascimento: data.dtNascimento
      };
      
      const updatedUser = await api.atualizar(Number(user.idUsuario), payload);
      
      if (updatedUser) {
        const userWithId = { ...updatedUser, idUsuario: user.idUsuario };
        localStorage.setItem("user", JSON.stringify(userWithId));
        setUser(userWithId);
        setMessage("Dados atualizados com sucesso!");
        setIsEditing(false);
        
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Erro ao atualizar dados.");
      }
    } catch (error) {
      setMessage("Erro ao atualizar dados.");
    }
  };

  const handleDelete = async () => {
    if (!user?.idUsuario) return;

    try {
      const success = await api.deletar(Number(user.idUsuario));
      if (success) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } else {
        setMessage("Erro ao deletar conta.");
        setShowDeleteConfirm(false);
      }
    } catch (error) {
      setMessage("Erro ao deletar conta.");
      setShowDeleteConfirm(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  if (!user) return null;

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8 text-center">
            Meu Perfil
          </h1>

          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.includes("sucesso") 
                ? 'bg-green-500/10 border border-green-500/20' 
                : 'bg-red-500/10 border border-red-500/20'
            }`}>
              <p className={`text-center ${
                message.includes("sucesso") ? 'text-green-400' : 'text-red-400'
              }`}>
                {message}
              </p>
            </div>
          )}

          <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/20 text-gray-400"
                />
                <p className="text-xs text-gray-500">O email não pode ser alterado</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 rounded-lg border border-purple-500/20 text-white outline-none transition-all ${
                    !isEditing 
                      ? 'bg-slate-900/50 text-gray-400' 
                      : 'bg-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                  }`}
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
                <label htmlFor="dtNascimento" className="block text-sm font-medium text-gray-300">
                  Data de nascimento
                </label>
                {isEditing ? (
                  <>
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
                  </>
                ) : (
                  <div className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/20 text-gray-400">
                    {formatDateForDisplay(user.dtNascimento)}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {isEditing ? (
                  <>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-semibold"
                    >
                      Salvar alterações
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        reset({ nome: user.nome, dtNascimento: normalizeDate(user.dtNascimento) });
                      }}
                      className="flex-1 px-6 py-3 border-2 border-purple-500/50 hover:border-purple-500 text-white rounded-lg transition-all font-semibold"
                    >
                      Cancelar
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-semibold"
                  >
                    Editar dados
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="mt-8 p-8 rounded-xl bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 mb-4">Zona de perigo</h3>
            
            {!showDeleteConfirm ? (
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all font-semibold"
              >
                Excluir minha conta
              </button>
            ) : (
              <div className="space-y-4">
                <p className="text-red-400 font-semibold">
                  ⚠️ Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleDelete}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all font-semibold"
                  >
                    Sim, excluir conta
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="px-6 py-3 border-2 border-purple-500/50 hover:border-purple-500 text-white rounded-lg transition-all font-semibold"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-white underline transition-colors"
            >
              Sair da conta
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}