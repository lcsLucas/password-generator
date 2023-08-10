import InternalConfig from "./Config";
import ConfigStyled from "./Config.Styled";
import Option from "./Option";
import Slider from "./Slider";

type TypeInternalConfig = typeof InternalConfig;

type CompoundedComponent = TypeInternalConfig & {
  Styled: typeof ConfigStyled;
  Option: typeof Option;
  Slider: typeof Slider;
};

const Config = InternalConfig as CompoundedComponent;

Config.Styled = ConfigStyled;
Config.Option = Option;
Config.Slider = Slider;

export default Config;
