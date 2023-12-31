import styled from "styled-components";

export default {
  Container: styled.div`
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3rem;
    position: relative;

    &[data-copied]::before {
      content: "copied!";
      position: absolute;
      top: 50%;
      left: 100%;
      color: white;
      transform: translate(0.75rem, -50%);
      font-size: 1rem;
      background: black;
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;
      font-weight: 400;
    }
  `,
  Input: styled.input`
    display: block;
    width: 100%;
    font-size: 2.25rem;
    line-height: 1.75;
    padding: 0.75rem 2.25rem;
    padding-right: 7.5rem;
    font-family: sans-serif;
    border: 1px solid #dadada;
    border-radius: 3rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `,
  WrapperButton: styled.div`
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
  `,
  Button: styled.button`
    background: none;
    border: none;
    font-size: 1.9rem;
    padding: 0 0.5rem;
    color: #777;
    transition: 0.4s all;
    position: relative;

    &:active {
      color: green;
      font-weight: bold;
    }

    * {
      pointer-events: none;
    }
  `,
};
