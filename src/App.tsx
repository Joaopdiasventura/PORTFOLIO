import SideBar from "./components/sideBar";
import Tecnologies from "./components/main-content";
import { css } from "./styles/App";

const Content = css();

function App() {
  return (
    <Content>
      <h1>João Paulo Dias Ventura</h1>
      <div id="container">
        <SideBar />
        <Tecnologies />
      </div>
    </Content>
  );
}

export default App;
