import styled from "styled-components";

export const css = () => {
  return styled.div`
    #sidebar {
      background-color: #111;
      border: 1px solid #222;
      border-radius: 25px;
      display: flex;
      height: 60%;
      flex-direction: column;
      align-items: center;
      position: relative;
      padding: 1rem;
      width: 15vw;
      height: auto;
      scale: 1.2;
      margin: 3vw;
      overflow: hidden;
      max-width: 60%;

      img {
        border-radius: 10px;
        top: 1.5rem;
        width: 40%;
      }

      .title {
        text-align: center;
        display: flex;
        color: #a6a6a6;
        border-radius: 5px;
        margin-top: 1.5rem;
        word-wrap: break-word;
        word-break: break-all;
      }
    }

    #social-networks {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 1rem;
    }

    .social-btn {
      padding: 0.6em;
      background-color: #1d1d1d;
      border-radius: 5px;
      color: #333;
      font-size: 1.3vw;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.1s linear;
    }

    .social-btn:hover {
      scale: 1.2;
    }

    #information {
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: #1d1d1d;
      text-align: left;
      width: auto;
      border-radius: 5px;
      height: auto;
      padding: 1vw;
    }

    .info-card {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      border-bottom: 1px solid #444;
      width: 8vw;
      height: auto;

      h3 {
        color: #a6a6a6;
        font-size: 0.8vw;
        margin-bottom: 0.5rem;
      }
      p {
        color: #fff;
        font-weight: bold;
        font-size: 0.6vw;
      }
    }
  `;
};
