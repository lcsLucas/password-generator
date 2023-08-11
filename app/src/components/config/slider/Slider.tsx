import React from "react";
import Slider from ".";
import { useGenerate } from "@/context/Generate";

type PropsSlider = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  value: number;
};

export default React.forwardRef<HTMLInputElement, PropsSlider>((props, ref) => {
  const { config, handleChangeLength } = useGenerate();

  return (
    <Slider.Styled.Container>
      {props.label ? (
        <Slider.Styled.Label>{props.label}</Slider.Styled.Label>
      ) : null}
      <Slider.Styled.Input
        min={1}
        max={50}
        {...props}
        ref={ref}
        type="range"
        value={config.length}
        title={config.length + ""}
        style={props.style}
        onChange={event => handleChangeLength!(+event.target.value)}
      />
      <Slider.Styled.Number>{config.length}</Slider.Styled.Number>
    </Slider.Styled.Container>
  );
});
