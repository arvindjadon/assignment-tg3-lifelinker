import styled from "styled-components";

function Logo({ type }) {
  const StyledLogo = styled.div`
    padding: 1.2rem 0;
  `;

  const Img = styled.img`
    ${(props) =>
      props.type === "small" &&
      `
    height: 2rem;
  `}
    ${(props) =>
      props.type === "large" &&
      `
    height: 5rem;
    `}
    width: auto;
  `;

  return (
    <StyledLogo>
      <Img type={type} src="logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;