import styled from "styled-components";
import GlobalStyles from "./styled-components/GlobalStyles";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Header />
        <SignUpSection>
          <FreeTrialDiv>
            <FreeTrialText>
              <span>Try it free 7 days</span> then $20/mo. thereafter
            </FreeTrialText>
          </FreeTrialDiv>
          <SignUpForm />
        </SignUpSection>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.8rem 2.4rem 6.8rem;

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    padding: 12.1rem 16.5rem;
    gap: 4.5rem;
  }
`;

const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 327px;

  @media only screen and (min-width: 90rem) {
    max-width: 540px;
  }
`;

const FreeTrialDiv = styled.div`
  padding: 1.6rem 6.6rem 1.8rem 6.7rem;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  background-color: #5e54a4;
  border-radius: 10px;

  @media only screen and (min-width: 90rem) {
    padding: 1.7rem 11rem;
    width: 540px;
  }
`;

const FreeTrialText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.73;
  letter-spacing: 0.27px;
  font-weight: 400;

  span {
    font-weight: bold;
  }
`;

export default App;
