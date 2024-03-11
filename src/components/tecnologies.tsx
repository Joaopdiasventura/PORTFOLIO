import { css } from "../styles/Tecnologies";
import { register } from "swiper/element";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";

const Content = css();

function Tecnologies() {
  return (
    <Content>
      <Swiper pagination={{clickable: true}} slidesPerView={1} navigation>
        <Tecnologies></Tecnologies>
      </Swiper>
    </Content>
  );
}

export default Tecnologies;
