import styled from "styled-components";

export const css = () => {
  return styled.div`
    #main-content {
      background-color: #111;
      border-radius: 10px;
      padding: 3rem;
      position: relative;
      position: relative;
      section {
        display: flex;
        flex-direction: column;
      }
      h2 {
        color: #fff;
        font-size: 2.2rem;
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
        width: 30%;
      }
      p {
        color: #a6a6a6;
        margin-bottom: 1rem;
        line-height: 1.3rem;
      }
    }
    .technologies-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }
    .technology-card {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #333;
      width: 45%;
      border-radius: 5px;
      svg {
        font-size: 12rem;
      }
      h3 {
        color: #fff;
        margin-bottom: 1rem;
      }
    }
  `;
};
