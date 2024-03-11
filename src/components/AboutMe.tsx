import { css } from "../styles/AboutMe";
import ProfileSvg from "../svgs/Profile";

const Content = css();

function AboutMe() {
  return (
    <Content>
      <div className="informations">
        <div className="img">
          <img src="./assets/image.jpeg" alt="" />
        </div>
        <h2>JOÃO PAULO DIAS VENTURA</h2>
        <p>DESENVOLVEDOR FULL-STACK</p>
        <ProfileSvg></ProfileSvg>
      </div>
      <div className="texts">
        <p>
          Olá, sou um desenvolvedor fullstack, com um forte foco no backend.
          Possuo experimento com os frameworks Nest.js, Spring Boot e .NET, onde
          mergulhei de cabeça para dominar os aspectos fundamentais do
          desenvolvimento de sistemas. <br />
          Atualmente, estou expandindo meu conhecimento para incluir as
          tecnologias do lado do cliente, como React.js e React Native, a fim de
          criar experiências de usuário ainda mais interativas e dinâmicas.
        </p>
      </div>
    </Content>
  );
}

export default AboutMe;
