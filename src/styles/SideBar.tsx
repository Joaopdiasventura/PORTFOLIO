import styled from "styled-components";

export const css = () => {
  return styled.div`
    #sidebar {
      text-align: center;
      background-color: #111;
      border: 1px solid #222;
      border-radius: 25px;
      display: flex;
      height: 60%;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      padding: 1rem;
      width: auto;
      margin: 0 3.5rem;
      height: auto;
      scale: 1.2;

      img {
        scale: 1.2;
        border-radius: 10px;
        top: 1.5rem;
      }

      .title {
        color: #a6a6a6;
        border-radius: 5px;
        margin-top: 1.5rem ;
      }
    }

    #social-networks {
      display: flex;
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
      font-size: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.1s linear;
    }

    .social-btn:hover {
      scale: 1.2;
    }

    #linkedin {
      color: #0072b1;
    }

    #github {
      color: #000;
    }

    #instagram {
      color: #bc2a8d;
    }

    #information {
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: #1d1d1d;
      padding: 3rem;
      text-align: left;
      width: auto;
      border-radius: 5px;
    }

    .info-card {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      padding: 0.5rem;
      margin-bottom: 0.8rem;
      border-bottom: 1px solid #444;
      word-wrap: normal;
      width: 100%;

      h3 {
        color: #a6a6a6;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }
      p {
        color: #fff;
        font-weight: bold;
        width: auto;
        overflow: visible;
        flex-wrap: nowrap;
        word-wrap: inherit;
      }
    }
  `;
};
