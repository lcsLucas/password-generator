import InternalOption from "./Option";
import OptionStyled from "./Option.Styled";

type TypeInternalOption = typeof InternalOption;

type CompoundedComponent = TypeInternalOption & {
  Styled: typeof OptionStyled;
};

const Option = InternalOption as CompoundedComponent;

Option.Styled = OptionStyled;

export default Option;
