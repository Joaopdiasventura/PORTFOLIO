import { css } from "../styles/Projects";

const Content = css();

function Projects() {
  return (
    <Content>
      <small>em todos os projetos utilize o email: teste@gmail.com com a senha: 123</small>
      <div className="project">
        <a href="https://instagram-sigma-steel.vercel.app/enter">
          <h4>Rede Social</h4>
          <div>
            <img src="https://icones.pro/wp-content/uploads/2021/02/instagram-icone-rouge.png" />
            <p>
              Desenvolvido em TypeScript, este projeto oferece aos usuários a
              capacidade de criar posts contendo fotos, que são armazenadas no
              serviço de armazenamento S3 da AWS. Além disso, o projeto inclui
              um formulário que permite o envio de e-mails contendo códigos de
              verificação para validar endereços de e-mail registrados no banco
              de dados MongoDB.
            </p>
          </div>
        </a>
      </div>
      <div className="project">
        <a href="https://chat-two-ochre-97.vercel.app/enter">
          <h4>Chat em Tempo Real</h4>
          <div>
            <img src="https://itaimbemaquinas.com.br/wp-content/uploads/sites/79/2020/07/zap-vermelho-300x300.png" />
            <p>
              Desenvolvido em TypeScript, este projeto aproveita o Socket.io
              para viabilizar a comunicação em tempo real entre o cliente e o
              servidor. Além de transmitir notificações instantâneas ao receber
              mensagens, ele conta com um formulário que envia códigos de
              verificação para validar endereços de e-mail. Ao se registrar, é
              iniciada uma conversa que utiliza uma API desenvolvida por mim para estabelecer a
              conexão com o chat GPT.
            </p>
          </div>
        </a>
      </div>
    </Content>
  );
}

export default Projects;