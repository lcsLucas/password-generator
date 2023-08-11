import Icons from "@/utils/Icons";
import Display from ".";
import React from "react";
import { useGenerate } from "@/context/Generate";

type DisplayProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.forwardRef<HTMLDivElement, DisplayProps>((props, ref) => {
  const { config } = useGenerate();

  return (
    <Display.Styled.Container {...props} ref={ref}>
      <Display.Styled.Input
        type="text"
        value={new Array(config.length).fill(0).join("")}
      />
      <Display.Styled.WrapperButton>
        <Display.Styled.Button title="Copy">
          <Icons.Copy />
        </Display.Styled.Button>
        <Display.Styled.Button title="Refresh">
          <Icons.Refresh />
        </Display.Styled.Button>
      </Display.Styled.WrapperButton>
    </Display.Styled.Container>
  );
});
