import Icons from "@/utils/Icons";
import Display from ".";
import React from "react";
import { useGenerate } from "@/context/Generate";

type DisplayProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.memo(
  React.forwardRef<HTMLDivElement, DisplayProps>((props, ref) => {
    const { password, config, handleChangeLength } = useGenerate();

    const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(event);
    };

    return (
      <Display.Styled.Container {...props} ref={ref}>
        <Display.Styled.Input type="text" value={password.value} />
        <Display.Styled.WrapperButton>
          <Display.Styled.Button title="Copy" onClick={handleCopy}>
            <Icons.Copy />
          </Display.Styled.Button>
          <Display.Styled.Button
            title="Refresh"
            onClick={() => handleChangeLength!(config.length.value)}
          >
            <Icons.Refresh />
          </Display.Styled.Button>
        </Display.Styled.WrapperButton>
      </Display.Styled.Container>
    );
  }),
);
