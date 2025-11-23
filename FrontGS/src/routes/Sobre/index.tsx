import { useEffect } from 'react';

export default function Sobre() {
  useEffect(() => {
    document.title = 'Up\'U - Sobre o Projeto';
  }, []);

  const features = [
    {
      title: "Análise de Mercado",
      description: "Identificamos as tecnologias e skills mais demandadas no mercado através de análise de vagas, tendências e dados do setor"
    },
    {
      title: "Roadmap Personalizado",
      description: "Com base no seu perfil atual, criamos um plano de estudos customizado para você alcançar seus objetivos profissionais"
    },
    {
      title: "Comunidade Ativa",
      description: "Conecte-se com outros desenvolvedores, compartilhe experiências e aprenda com a comunidade"
    },
    {
      title: "Recursos Curados",
      description: "Acesso a cursos, artigos e materiais selecionados especialmente para acelerar seu aprendizado"
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              O que é Up'U?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Up'U é uma plataforma que conecta desenvolvedores e profissionais de TI às 
              <span className="text-cyan-400 font-semibold"> tendências do mercado</span>, 
              oferecendo insights valiosos sobre as tecnologias mais demandadas e criando 
              planos de carreira personalizados para seu crescimento profissional.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16 p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Nossa Missão</h2>
            <p className="text-gray-400 leading-relaxed">
              Democratizar o acesso à informação sobre o mercado de tecnologia e capacitar 
              profissionais a tomarem decisões informadas sobre suas carreiras, eliminando 
              a incerteza sobre quais tecnologias aprender e quando.
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Funcionalidades</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Tecnologias Utilizadas</h2>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Java/Quarkus', 'Oracle DB'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/30 text-gray-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}