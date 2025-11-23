import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Up\'U - Conectando desenvolvedores às tendências do mercado';
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      
      <section className="flex-1 flex items-center w-full px-4 py-20 md:py-32">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 leading-tight">
            Up'U
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Conectando desenvolvedores às <span className="text-cyan-400 font-semibold">tendências</span> do mercado
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Descubra as tecnologias em alta, trace sua jornada de aprendizado e mantenha-se
            atualizado com as demandas do mercado de tecnologia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/cadastro')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-semibold shadow-lg shadow-purple-500/50"
            >
              Começar Agora
            </button>
            <button 
              onClick={() => navigate('/sobre')}
              className="px-8 py-3 border-2 border-purple-500/50 hover:border-purple-500 text-white rounded-lg transition-all font-semibold"
            >
              Saber Mais
            </button>
          </div>
        </div>
      </section>

      
      <section className="w-full px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: '📊',
              title: 'Análise de Tendências',
              desc: 'Acompanhe em tempo real as tecnologias mais demandadas pelo mercado'
            },
            {
              icon: '🎯',
              title: 'Personalização',
              desc: 'Recomendações baseadas em suas habilidades e interesses atuais'
            },
            {
              icon: '🚀',
              title: 'Plano de Carreira',
              desc: 'Trace sua jornada de aprendizado com metas claras e alcançáveis'
            }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="w-full px-4 py-20">
        <div className="w-full max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para impulsionar sua carreira?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Junte-se a milhares de desenvolvedores que já estão se preparando para o futuro
          </p>
          <button 
            onClick={() => navigate('/cadastro')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-semibold shadow-lg shadow-purple-500/50"
          >
            Criar Conta Grátis
          </button>
        </div>
      </section>
    </main>
  );
}
