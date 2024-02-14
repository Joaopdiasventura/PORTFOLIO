import SideBar from "./sideBar";
import { css } from "../styles/main-content";
import Tecnologies from "./tecnologies";
import Projects from "./projects";

const Content = css();

function Main() {
  return (
    <Content>
      <main id="main-content">
        <section className="about-container">
          <h2>Sobre</h2>
          <div id="about">
            <SideBar />
            <div className="text">
              <p>
                Olá, sou um entusiasta da área de exatas desde que fui premiado
                em minha primeira olimpíada no entanto estou profundamente imerso no
                mundo da tecnologia e suas atualizações. Atualmente estou ativamente
                engajado em desafios, maratonas e competições, busco aprimorar
                meu conhecimento técnico especialmente em lógica e resolução de
                problemas.
              </p>
            </div>
          </div>
        </section>
        <section className="technologies-container">
          <h2>Tecnologias</h2>
           <Tecnologies/>
        </section>
        <section className="projects-container">
        <h2>Projetos</h2>
        <Projects/>
        </section>
      </main>
    </Content>
  );
}

export default Main;
