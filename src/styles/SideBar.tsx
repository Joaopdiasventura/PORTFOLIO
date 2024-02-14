import styled from "styled-components";

export const css = () => {
  return styled.div`
    #sidebar {
      background-color: #111;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      padding: 1rem;

      img {
        max-width: 70%;
        border-radius: 10px;
        position: relative;
        top: 1rem;
      }

      .title {
        color: #a6a6a6;
        border-radius: 5px;
        margin-top: 5rem ;
      }
    }

    #social-networks {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 8.3rem 0;
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
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #1d1d1d;
      padding: 1rem;
      margin-bottom: 2rem;
      text-align: left;
      width: 80%;
      border-radius: 5px;
    }

    .info-card {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      padding: 0.5rem;
      margin-bottom: 0.8rem;
      border-bottom: 1px solid #444;
      width: 100%;

      h3 {
        color: #a6a6a6;
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
      }
      p {
        color: #fff;
        font-weight: bold;
      }
    }
  `;
};
