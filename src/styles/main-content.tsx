import styled from "styled-components";

export const css = () => {
  return styled.div`
    height: auto;
    overflow: hidden;
    #main-content {
      width: auto;
      background-color: #111;
      border-radius: 2vw;
      padding: 3rem;
      position: relative;
      position: relative;
      section {
        display: flex;
        flex-direction: column;
        height: auto;
        margin: 2.5vh;
      }
      h2 {
        color: #fff;
        font-size: 2.2vw;
        margin-bottom: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: start;
        gap: 1rem;
      }
      h2:after {
        content: "";
        background: linear-gradient(
          90deg,
          rgb(255, 0, 0) 0%,
          rgb(135, 0, 0) 98%
        );
        height: 3px;
        width: 100%;
      }
      p {
        color: #a6a6a6;
        margin-bottom: 1rem;
        width: 40%;
        display: flex;
      }
    }
    #about {
      display: flex;
      flex-direction: row;
      justify-content: start;
      height: auto;
      align-items: center;
      .text {
        width: 20%;
        display: flex;
        p {
          line-height: 1.4;
          font-size: 2.5vh;
          width: 95%;
        }
      }
    }
    .technologies-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: space-around;
    }
    .technology-card {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #333;
      width: 15vw;
      border-radius: 5px;
      svg {
        font-size: 5vw;
        text-align: center;
      }
      h3 {
        color: #fff;
        margin-bottom: 1rem;
        text-align: center;
        margin: 7.5px;
        font-size: 1vw;
      }
      div {
        flex-wrap: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
    }
    
    @media only screen and (max-width: 767px) {
      
    #about {
      flex-direction: column;
      justify-content: center;
    }
  }
  `;
};
