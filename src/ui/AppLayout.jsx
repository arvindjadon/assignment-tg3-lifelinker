import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
`;

function AppLayout() {
  return <StyledAppLayout>AppLayout</StyledAppLayout>;
}

export default AppLayout;
