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
      color: #fff;
      font-size: 5rem;
      margin-bottom: 4rem;
      background: linear-gradient(90deg, rgb(202, 1, 1), rgb(60, 0, 0));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
    }

    #container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      div{
        margin: 3px;
      }
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
