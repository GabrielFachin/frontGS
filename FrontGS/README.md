📖 Sobre o Projeto
A Enfermeira Digital é uma aplicação web desenvolvida para democratizar o acesso à teleconsulta médica, especialmente para pessoas com:

🦽 Deficiências físicas ou visuais
👴 Dificuldades com tecnologia (idosos)
🌍 Acesso limitado a cuidadores ou suporte técnico

🎯 Objetivo Principal
Criar uma inteligência artificial assistente que acompanha o paciente durante todo o processo de teleconsulta, oferecendo:

⏰ Lembretes de consultas agendadas
🎥 Verificação automática de câmera e microfone
📝 Armazenamento de dúvidas para perguntar ao médico
🔊 Acessibilidade com TTS (Text-to-Speech) e STT (Speech-to-Text)
🧭 Guia passo a passo para entrar na consulta

✨ Funcionalidades
🏠 Página Inicial

Apresentação clara do projeto
Design responsivo e acessível
Navegação intuitiva

👤 Sistema de Autenticação

Cadastro de novos usuários
Login seguro com validação
Gerenciamento de sessão com localStorage

📊 Perfil do Usuário

Visualização de dados pessoais
Edição de nome e data de nascimento
Exclusão de conta com confirmação
Logout seguro

📞 Área de Contato

Formulário validado para envio de mensagens
Feedback visual de erros
Visualização de mensagens enviadas

❓ FAQ Interativo

Perguntas frequentes expansíveis
Navegação por parâmetros de URL
Interface limpa e organizada

👥 Página de Integrantes

Informações completas da equipe
Fotos e dados dos membros
Design em cards responsivos


🛠️ Tecnologias Utilizadas
React
TypeScript
Vite

Estilização

Tailwind CSS 4.1.13 - Framework CSS utility-first

Validação

React Hook Form 
Validações nativas do HTML5

Backend Integration

API REST - Comunicação com backend Java/Quarkus
Fetch API - Requisições HTTP nativas

🚀 Como Executar o Projeto
Pré-requisitos

Node.js 18+ instalado
npm
Git

Instalação
bash# Clone o repositório
git clone https://github.com/1TDSPW-Challenge-HC/Front-End-REACT.git

# Entre na pasta do projeto
cd Front-End-REACT/FrontCH

# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev
O projeto estará rodando em http://localhost:5173

🌐 API Backend
O frontend se comunica com uma API REST Java/Quarkus hospedada no Render:
Base URL: https://java-jdbc-zry5.onrender.com
Endpoints Disponíveis
MétodoEndpointDescriçãoGET/usuarioLista todos os usuáriosPOST/usuarioCadastra novo usuárioPUT/usuario/{id}Atualiza usuário por IDDELETE/usuario/{id}Remove usuário por ID
Estrutura de Dados
typescriptinterface User {
  idUsuario?: number;
  nome: string;
  email: string;
  senha?: string;
  dtNascimento?: string;
}

👥 Equipe de Desenvolvimento
<table>
  <tr>
    <td align="center">
      <b>Gabriel Fachin</b><br>
      <sub>RM: 561551</sub><br>
      <sub>1TDSPW</sub>
    </td>
    <td align="center">
      <b>Iago Dias</b><br>
      <sub>RM: 565708</sub><br>
      <sub>1TDSPW</sub>
    </td>
    <td align="center">
      <b>Fernando Charlles</b><br>
      <sub>RM: 566482</sub><br>
      <sub>1TDSPW</sub>
    </td>
  </tr>
</table>

🌐 Repositório GitHub: https://github.com/1TDSPW-Challenge-HC/Front-End-REACT.git


<div align="center">
Facilitando o acesso à saúde através da tecnologia
</div>