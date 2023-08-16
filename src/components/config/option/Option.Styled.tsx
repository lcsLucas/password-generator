import { styled } from "styled-components";

export default {
  Container: styled.label`
    display: inline-flex;
    align-items: center;
    margin-right: 0.75rem;

    &:last-child {
      margin-right: 0;
    }
  `,
  Input: styled.input`
    width: 1.3rem;
    height: 1.3rem;
    margin: 0.4rem;
  `,
  Span: styled.span`
    line-height: 1;
    font-size: 1.1rem;
    user-select: none;
  `,
};
