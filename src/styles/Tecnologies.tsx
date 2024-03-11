import styled from "styled-components";

export const css = () => {
  return styled.div`
    margin: 0;
    background-color: rgba(0, 0, 0, 0);
    height: calc(100vh - 0.4vw);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .tecnologie {
      display: flex;
      width: auto;
      justify-content: center;
      align-items: center;
      height: 80%;
      padding: 1vw;
      flex-direction: column;
      border-radius: 15px;
      border: 1px solid white;
      svg {
        font-size: 10vw;
      }
    }
  `;
};
