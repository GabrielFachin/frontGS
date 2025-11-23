import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { id } = useParams();

  const faqItems: FAQItem[] = [
    {
      question: "O que é o Up'U?",
      answer: "Up'U é uma plataforma que conecta desenvolvedores às tendências do mercado de tecnologia, oferecendo análises de mercado, planos de carreira personalizados e recursos curados."
    },
    {
      question: "A plataforma é gratuita?",
      answer: "Sim! O Up'U é totalmente gratuito. Nossa missão é democratizar o acesso à informação sobre o mercado de tecnologia."
    },
    {
      question: "Como funciona a análise de tendências?",
      answer: "Analisamos dados de vagas de emprego, pesquisas de mercado e tendências do setor para identificar as tecnologias mais demandadas."
    },
    {
      question: "Preciso ter experiência prévia?",
      answer: "Não! O Up'U é para todos os níveis, desde iniciantes até profissionais experientes que querem se manter atualizados."
    }
  ];

  useEffect(() => {
    if (id) {
      const itemIndex = faqItems.findIndex(item => 
        item.question.toLowerCase().includes(id.toLowerCase())
      );
      if (itemIndex !== -1 && !openItems.includes(itemIndex)) {
        setOpenItems(prev => [...prev, itemIndex]);
      }
    }
  }, [id, faqItems, openItems]);

  function toggleItem(index: number) {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  }

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 text-center">
            Perguntas Frequentes
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Tire suas dúvidas sobre o Up'U
          </p>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white text-lg pr-4">
                    {item.question}
                  </span>
                  <span className="text-cyan-400 text-2xl flex-shrink-0">
                    {openItems.includes(index) ? '−' : '+'}
                  </span>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 py-4 border-t border-purple-500/20 bg-slate-900/30">
                    <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}