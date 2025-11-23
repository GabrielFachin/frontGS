import { useState } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissions, setSubmissions] = useState<FormData[]>([]);

  function validateForm(data: FormData): FormErrors {
    const errors: FormErrors = {};
    
    if (data.name.length < 3) {
      errors.name = 'Nome deve ter pelo menos 3 caracteres';
    }
    
    if (!data.email.includes('@')) {
      errors.email = 'Email inválido';
    }
    
    if (data.message.length < 10) {
      errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    return errors;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors({});
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmissions(prev => [...prev, formData]);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  }

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 text-center">
            Entre em Contato
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Tem alguma dúvida ou sugestão? Envie uma mensagem!
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-6 mb-12">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-slate-800 border ${
                  errors.name ? 'border-red-500' : 'border-purple-500/20'
                } text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all`}
                placeholder="Seu nome completo"
                required
              />
              {errors.name && (
                <p className="text-sm text-red-400 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-slate-800 border ${
                  errors.email ? 'border-red-500' : 'border-purple-500/20'
                } text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all`}
                placeholder="seu.email@exemplo.com"
                required
              />
              {errors.email && (
                <p className="text-sm text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg bg-slate-800 border ${
                  errors.message ? 'border-red-500' : 'border-purple-500/20'
                } text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none`}
                placeholder="Escreva sua mensagem aqui..."
              />
              {errors.message && (
                <p className="text-sm text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white rounded-lg transition-all font-semibold shadow-lg shadow-purple-500/50"
            >
              Enviar Mensagem
            </button>
          </form>

          {submissions.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-6">Mensagens Enviadas</h2>
              {submissions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/20 border border-purple-500/20"
                >
                  <p className="text-white font-semibold mb-2">{item.name}</p>
                  <p className="text-gray-400 text-sm mb-3">{item.email}</p>
                  <p className="text-gray-300 leading-relaxed">{item.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
