import React from "react";
import Config from ".";
import { useGenerate } from "@/context/Generate";

type ConfigProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.forwardRef<HTMLDivElement, ConfigProps>((props, ref) => {
  const { config } = useGenerate();

  return (
    <Config.Styled.Container {...props} ref={ref}>
      <Config.Slider label="Length:" value={10} />
      <Config.Option
        checked={config.lower}
        text="abc"
        value="lower"
        title="Allow lower case"
        style={{
          marginLeft: "1.5rem",
          marginRight: ".75rem",
        }}
      />
      <Config.Option
        checked={config.upper}
        text="ABC"
        value="upper"
        title="Allow upper case"
        style={{
          marginRight: ".75rem",
        }}
      />
      <Config.Option
        checked={config.numbers}
        text="123"
        value="numbers"
        title="Allow numbers"
        style={{
          marginRight: ".75rem",
        }}
      />
      <Config.Option
        checked={config.symbols}
        text="#$&"
        value="symbols"
        title="Allow symbols"
      />
    </Config.Styled.Container>
  );
});
