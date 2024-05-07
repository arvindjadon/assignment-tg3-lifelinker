import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.aside`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo type="large" />
    </StyledHeader>
  );
}

export default Header;
