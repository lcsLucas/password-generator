import { useGenerate } from "@/context/Generate";
import App from ".";
import Config from "../config";
import Display from "../display";

export default () => {
  const { password } = useGenerate();

  const color = (() => {
    switch (password.strong) {
      case "VeryLow":
        return "#FF1C25";
      case "Low":
        return "#F16D01";
      case "Moderate":
        return "#FBBF09";
      case "High":
        return "#75BC46";
      case "VeryHigh":
        return "#01AA4F";
    }
  })();

  return (
    <App.Styled.Container color={color}>
      <App.Styled.Status>
        [
        {password.strong
          .split(/(?=[A-Z])/)
          .map(part => part.toLowerCase())
          .join(" ")}{" "}
        Password]
      </App.Styled.Status>

      <App.Styled.Wrapper>
        <Display />
        <Config />
      </App.Styled.Wrapper>
    </App.Styled.Container>
  );
};
