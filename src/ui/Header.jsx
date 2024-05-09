import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 57rem) {
    justify-content: space-between;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo type="large" />
    </StyledHeader>
  );
}

export default Header;
