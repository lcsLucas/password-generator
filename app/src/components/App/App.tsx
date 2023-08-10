import App from ".";
import Config from "../Config";
import Display from "../Display";

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
