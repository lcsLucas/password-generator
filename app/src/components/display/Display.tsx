import React from "react";
import { useGenerate } from "@/context/Generate";
import Icons from "@/utils/Icons";
import Display from ".";

type DisplayProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default React.memo(
  React.forwardRef<HTMLDivElement, DisplayProps>((props, ref) => {
    const refInput = React.useRef<HTMLInputElement>(null);
    const refContainer = React.useRef<HTMLDivElement>(null);
    const refTimer = React.useRef<number | null>(null);

    const { password, config, handleChangeLength, handleChangePassword } =
      useGenerate();

    const handleCopy = () => {
      const elInput = refInput.current;

      if (elInput) {
        elInput.select();
        elInput.setSelectionRange(0, elInput.value.length);

        navigator.clipboard.writeText(elInput.value);

        refContainer.current?.setAttribute("data-copied", "");

        if (refTimer.current) window.clearTimeout(refTimer.current);

        refTimer.current = window.setTimeout(() => {
          refContainer.current?.removeAttribute("data-copied");
          refTimer.current = null;
        }, 5000);
      }
    };

    ref = refContainer;

    return (
      <Display.Styled.Container {...props} ref={refContainer}>
        <Display.Styled.Input
          type="text"
          maxLength={50}
          ref={refInput}
          value={password.value}
          onChange={e => handleChangePassword!(e.target.value)}
        />
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
