import styled from "styled-components";

export const css = () => {
  return styled.div`
    border: 0.2vw solid;
    border-image: linear-gradient(45deg, #ffffff, #000000);
    border-image-slice: 1;
    background-image: linear-gradient(-45deg, #000000, #797979);
  `;
};
