import styled from "styled-components";

export const css = () => {
  return styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    small {
      color: white;
      text-align: center;
      width: 100%;
    }
    .project {
      transition: all 0.2s;
      border: 1px solid #222;
      background-color: #000;
      border-radius: 20px;
      padding: 1rem;
      width: 70vw;
      margin: 1rem 0;
      max-width: 75%;
      a {
        text-decoration: none;
      }
      h4 {
        text-align: center;
        color: #fff;
        margin: 1rem;
        font-size: 3vw;
        line-height: 3vw;
        width: 100%;
      }
      div {
        gap: 10px;
        display: flex;
        height: auto;
        align-items: center;
        line-height: 200;
        line-height: 1.4;
        img {
          width: 30%;
        }
        p {
          font-size: 1.5vw;
          line-height: 1.5vw;
          width: 100%;
        }
      }
    }

    .project:hover {
      cursor: pointer;
      scale: 1.05;
    }

    @media only screen and (max-width: 767px) {
      flex-direction: row;
      .project {
        width: 40%;
      }
    }
  `;
};
