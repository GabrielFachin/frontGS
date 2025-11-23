export default function Rodape() {
  return (
    <footer className="w-full py-6 bg-slate-900/95 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Up'U™. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="/sobre" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sobre
            </a>
            <a href="/contato" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contato
            </a>
            <a href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
