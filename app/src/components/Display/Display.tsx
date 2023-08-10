import Icons from "@/utils/Icons";
import Display from ".";
import React from "react";

type DisplayProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.forwardRef<HTMLDivElement, DisplayProps>((props, ref) => {
  return (
    <Display.Styled.Container {...props} ref={ref}>
      <Display.Styled.Input type="text" />
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
