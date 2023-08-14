import React from "react";
import Slider from ".";

type PropsSlider = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  value: number;
  handleChange: (length: number) => void;
};

export default React.memo(
  React.forwardRef<HTMLInputElement, PropsSlider>(
    ({ label, value, style, handleChange, ...props }, ref) => {
      return (
        <Slider.Styled.Container>
          {label ? <Slider.Styled.Label>{label}</Slider.Styled.Label> : null}
          <Slider.Styled.Input
            min={1}
            max={50}
            {...props}
            ref={ref}
            type="range"
            value={value}
            title={value + ""}
            style={style}
            onChange={event => handleChange(+event.target.value)}
          />
          <Slider.Styled.Number>{value}</Slider.Styled.Number>
        </Slider.Styled.Container>
      );
    },
  ),
);
