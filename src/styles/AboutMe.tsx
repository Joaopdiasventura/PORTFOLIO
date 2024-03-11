import styled from "styled-components";

export const css = () => {
  return styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");
    margin: 0;
    background-color: rgba(0, 0, 0, 0);
    height: calc(100vh - 0.4vw);
    display: flex;
    align-items: center;
    justify-content: space-around;
    .informations {
      display: flex;
      flex-direction: column;
      width: 35%;
      height: auto;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 1%;
      h2 {
        font-family: "Montserrat", sans-serif;
        color: #fff;
        margin-top: 1vh;
        font-size: 1.5vw;
      }
      P {
        font-family: "Montserrat", sans-serif;
        color: #fff;
        margin-top: 1vh;
        font-size: 1vw;
      }
      .img {
        background-image: linear-gradient(-90deg, #ffffff, #373737);
        width: 20vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        padding: 0.125vw;
        transition: all 1s;
        img {
          width: 20vw;
          border-radius: 50%;
        }
      }
      .svgs {
        display: flex;
        justify-content: center;
      }
      .svgs div a svg {
        font-size: 2.5vw;
        background-color: #000;
        justify-content: center;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
      }
      .svgs div {
        display: flex;
        background-image: linear-gradient(-90deg, #ffffff, #373737);
        border-radius: 12.5px;
        height: auto;
        padding: 0.2vw;
        margin: 1vh 1vw;
        transition: all 0.25s;
      }
      .svgs div:hover {
        scale: 1.25;
        transform: rotate(360deg);
      }
    }
    .texts {
      margin: 1%;
      font-family: "Montserrat", sans-serif;
      width: 35%;
      height: auto;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.25vw;
    }
  `;
};
