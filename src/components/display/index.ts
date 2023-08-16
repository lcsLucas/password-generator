import InternalDisplay from "./Display";
import DisplayStyled from "./Display.Styled";

type TypeInternalDisplay = typeof InternalDisplay;

type CompoundedComponent = TypeInternalDisplay & {
  Styled: typeof DisplayStyled;
};

const Display = InternalDisplay as CompoundedComponent;

Display.Styled = DisplayStyled;

export default Display;
