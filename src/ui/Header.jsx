import styled from "styled-components";
import Logo from "./Logo";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 59rem) {
    justify-content: space-between;
  }
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--color-background);
  cursor: pointer;

  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-sidebar-background);
  }
`;

const StyledCross = styled(Icon)`
  & svg {
    color: var(--color-visited);
  }
  display: none;
  @media (max-width: 59rem) {
    display: block;
  }
`;

const StyledMenu = styled(Icon)`
  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-sidebar-background);
  }
  display: none;
  @media (max-width: 59rem) {
    display: block;
  }
`;

function Header({ isOpen, onShowSidebar }) {
  return (
    <StyledHeader>
      {isOpen ? (
        <StyledCross onClick={onShowSidebar}>
          <IoCloseCircleSharp />
        </StyledCross>
      ) : (
        <StyledMenu onClick={onShowSidebar}>
          <TiThMenu />
        </StyledMenu>
      )}
      <Logo type="large" />
    </StyledHeader>
  );
}

export default Header;
