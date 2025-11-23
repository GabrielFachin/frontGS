import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Página não encontrada
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Ops! Parece que você se perdeu. A página que você está procurando não existe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-semibold shadow-lg shadow-purple-500/50"
          >
            Voltar para Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 border-2 border-purple-500/50 hover:border-purple-500 text-white rounded-lg transition-all font-semibold"
          >
            Página Anterior
          </button>
        </div>
      </div>
    </main>
  );
}