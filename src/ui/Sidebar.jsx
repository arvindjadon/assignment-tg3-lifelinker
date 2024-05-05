import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-sidebar);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid black;
  grid-row: 1/-1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <p>Logo</p>
    </StyledSidebar>
  );
}

export default Sidebar;
