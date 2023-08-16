import React from "react";
import Option from ".";
import { initialOptions } from "@/utils/options";

export interface IOptionProps {
  text: string;
  title?: string;
  value?: string | ReadonlyArray<string> | number | undefined;
}

type PropsOption = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  id: keyof typeof initialOptions;
  text: string;
  checked?: boolean | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  handleChange: (c: keyof typeof initialOptions, value: boolean) => void;
};

export default React.memo(
  React.forwardRef<HTMLLabelElement, PropsOption>(
    ({ id, value, text, checked, handleChange, ...props }, ref) => {
      return (
        <Option.Styled.Container {...props} ref={ref}>
          <Option.Styled.Input
            type="checkbox"
            value={value}
            checked={checked}
            onChange={event => handleChange(id, event.target.checked)}
          />
          <Option.Styled.Span>{text}</Option.Styled.Span>
        </Option.Styled.Container>
      );
    },
  ),
);
