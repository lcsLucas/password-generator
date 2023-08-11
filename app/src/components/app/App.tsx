import App from ".";
import Config from "../config";
import Display from "../display";

export default () => {
  return (
    <App.Styled.Container>
      <App.Styled.Wrapper>
        <Display />
        <Config />
      </App.Styled.Wrapper>
    </App.Styled.Container>
  );
};
