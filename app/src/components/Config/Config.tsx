import React from "react";
import Config from ".";

type ConfigProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.forwardRef<HTMLDivElement, ConfigProps>((props, ref) => {
  return (
    <Config.Styled.Container {...props} ref={ref}>
      <Config.Slider label="Length:" />
      <Config.Option
        text="abc"
        value="lower"
        title="Allow lower case"
        style={{
          marginLeft: "1.5rem",
          marginRight: ".75rem",
        }}
      />
      <Config.Option
        text="ABC"
        value="upper"
        title="Allow upper case"
        style={{
          marginRight: ".75rem",
        }}
      />
      <Config.Option
        text="123"
        value="numbers"
        title="Allow numbers"
        style={{
          marginRight: ".75rem",
        }}
      />
      <Config.Option text="#$&" value="symbols" title="Allow symbols" />
    </Config.Styled.Container>
  );
});
