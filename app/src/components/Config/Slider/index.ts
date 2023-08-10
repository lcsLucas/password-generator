import InternalSlider from "./Slider";
import SliderStyled from "./Slider.Styled";

type TypeInternalSlider = typeof InternalSlider;

type CompoundedComponent = TypeInternalSlider & {
  Styled: typeof SliderStyled;
};

const Slider = InternalSlider as CompoundedComponent;

Slider.Styled = SliderStyled;

export default Slider;
