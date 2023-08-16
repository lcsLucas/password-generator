import React from "react";
import Config from ".";
import { useGenerate } from "@/context/Generate";
import { initialOptions } from "@/utils/options";
import {
  ConfigCheckType,
  ConfigSliderType,
} from "@/context/Generate/GenerateContext";

type ConfigProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.forwardRef<HTMLDivElement, ConfigProps>((props, ref) => {
  const { config, handleChangeLength, handleChangeOption } = useGenerate();

  const handleChangeSlider = (length: number) => {
    handleChangeLength!(length);
  };

  const handleChangeCheck = (
    c: keyof typeof initialOptions,
    value: boolean,
  ) => {
    handleChangeOption!(c, value);
  };

  return (
    <Config.Styled.Container {...props} ref={ref}>
      {Object.keys(config).map(c => {
        return (c as keyof typeof initialOptions) === "length" ? (
          <Config.Slider
            key={c as string}
            label={(config[c as "length"] as unknown as ConfigSliderType).label}
            value={(config[c as "length"] as unknown as ConfigSliderType).value}
            handleChange={handleChangeSlider}
          />
        ) : (
          <Config.Option
            key={c as string}
            id={c as keyof typeof initialOptions}
            checked={
              (
                config[
                  c as keyof typeof initialOptions
                ] as unknown as ConfigCheckType
              ).checked
            }
            text={
              (
                config[
                  c as keyof typeof initialOptions
                ] as unknown as ConfigCheckType
              ).text
            }
            value={
              (
                config[
                  c as keyof typeof initialOptions
                ] as unknown as ConfigCheckType
              ).value
            }
            title={
              (
                config[
                  c as keyof typeof initialOptions
                ] as unknown as ConfigCheckType
              ).title
            }
            handleChange={handleChangeCheck}
          />
        );
      })}
    </Config.Styled.Container>
  );
});
