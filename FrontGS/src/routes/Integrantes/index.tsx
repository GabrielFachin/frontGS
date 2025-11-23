export default function Integrantes() {
  const integrantes = [
    {
      nome: "Gabriel Fachin",
      turma: "1TDSPW",
      RM: 561551,
      foto: "/assets/img/foto-gabriel.jpeg",
      github: "https://github.com/gabrielfachin",
      linkedin: "https://linkedin.com/in/gabrielfachin"
    },
    {
      nome: "Iago Dias",
      turma: "1TDSPW",
      RM: 565708,
      foto: "/assets/img/foto-iago.jpeg",
      github: "https://github.com/iagodias",
      linkedin: "https://linkedin.com/in/iagodias"
    },
    {
      nome: "Fernando Charlles",
      turma: "1TDSPW",
      RM: 566482,
      foto: "/assets/img/foto-charlles.jpeg",
      github: "https://github.com/fernandocharlles",
      linkedin: "https://linkedin.com/in/fernandocharlles"
    }
  ];

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 text-center">
            Nossa Equipe
          </h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Conheça os desenvolvedores por trás do Up'U
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {integrantes.map((integrante, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gradient-to-r from-cyan-500 to-purple-500 p-1">
                  <img
                    src={integrante.foto}
                    alt={`Foto de ${integrante.nome}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {integrante.nome}
                </h3>
                <p className="text-cyan-400 font-medium mb-1">{integrante.turma}</p>
                <p className="text-gray-400 mb-6">RM: {integrante.RM}</p>
                
                <div className="flex gap-4">
                  <a
                    href={integrante.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={integrante.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}