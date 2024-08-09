import styled from "styled-components";

export default function Header() {
  return (
    <HeaderSection>
      <Heading>Learn to code by watching others</Heading>
      <HeaderParagraph>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </HeaderParagraph>
    </HeaderSection>
  );
}

const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  color: #fff;
  margin-bottom: 6.4rem;
  max-width: 525px;
  text-align: center;
  @media only screen and (min-width: 90rem) {
    align-items: flex-start;
    text-align: left;
  }
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.29;
  letter-spacing: -0.29px;

  @media only screen and (min-width: 90rem) {
    font-size: 5rem;
    line-height: 1.1;
    letter-spacing: -0.52px;
  }
`;

const HeaderParagraph = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.63;
`;
