import styled from "styled-components";

export const css = () => {
  return styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 3rem;
    gap: 3rem;

    h1 {
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 5rem;
      margin-bottom: 4rem;
      -webkit-text-stroke: 3px #550000;
      position: relative;
    }

    #container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    @media only screen and (max-width: 767px) {
      #container {
        display: flex;
        flex-direction: column;
        height: 100%;

        div {
          padding: 0;
          margin: 5px;
          width: 270px;
        }

        div div {
          padding: 0;
          margin: 0;
          margin-left: 0;
        }
      }
    }
  `;
};
