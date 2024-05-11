import styled from "styled-components";

const StyledLogo = styled.div`
  padding-top: 1.2rem;
`;

const Img = styled.img`
  ${(props) =>
    props.type === "small" &&
    `
    height: 4rem;
  `}
  ${(props) =>
    props.type === "large" &&
    `
    height: 6rem;
    `}
    width: auto;
`;

function Logo({ type }) {
  return (
    <StyledLogo>
      <Img type={type} src="logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
