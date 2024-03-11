import AboutMe from "./components/AboutMe";
import Tecnologies from "./components/Tecnologies";
import { css } from "./styles/App";

const Content = css();

function App() {
  return (
    <Content>
      <AboutMe></AboutMe>
      <Tecnologies></Tecnologies>
    </Content>
  );
}

export default App;