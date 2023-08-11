import React from "react";
import Option from ".";

export interface IOptionProps {
  text: string;
  title?: string;
  value?: string | ReadonlyArray<string> | number | undefined;
}

type PropsOption = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  text: string;
  value?: string | ReadonlyArray<string> | number | undefined;
  checked?: boolean | undefined;
};

export default React.forwardRef<HTMLLabelElement, PropsOption>(
  ({ value, text, checked, ...props }, ref) => {
    return (
      <Option.Styled.Container {...props} ref={ref}>
        <Option.Styled.Input type="checkbox" value={value} checked={checked} />
        <Option.Styled.Span>{text}</Option.Styled.Span>
      </Option.Styled.Container>
    );
  },
);