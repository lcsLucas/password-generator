import { styled } from "styled-components";

export default {
  Container: styled.div<{
    color?: string;
  }>`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    background-color: ${c => c.color ?? "none"};
    transition: 0.4s background-color;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.25;
      background: radial-gradient(transparent, black);
      pointer-events: none;
    }
  `,
  Wrapper: styled.div`
    width: 100%;
    max-width: 700px;
  `,
  Status: styled.div`
    left: 0;
    top: 1rem;
    width: 100%;
    color: white;
    position: fixed;
    text-align: center;
    text-transform: capitalize;
    font-family: "Courier New", Courier, monospace;
  `,
};
