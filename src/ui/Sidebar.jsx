import styled, { css } from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-sidebar-background);
  padding: 3.2rem 2.4rem;
  border-radius: var(--border-radius-sm);

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 59rem) {
    ${(props) =>
      props.isOpen === false &&
      css`
        display: none;
      `}

    position: absolute;
    top: 10rem;
    left: 5rem;
    width: 50%;
    height: 100vh;
  }

  @media (max-width: 34rem) {
    width: 100%;
  }
`;

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar isOpen={isOpen}>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
