import React from "react";
import Slider from ".";

type PropsSlider = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
};

export default React.forwardRef<HTMLInputElement, PropsSlider>((props, ref) => {
  return (
    <Slider.Styled.Container>
      {props.label ? (
        <Slider.Styled.Label>{props.label}</Slider.Styled.Label>
      ) : null}
      <Slider.Styled.Input
        min={1}
        max={50}
        {...props}
        type="range"
        style={props.style}
        ref={ref}
      />
      <Slider.Styled.Number>8</Slider.Styled.Number>
    </Slider.Styled.Container>
  );
});
