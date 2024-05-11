import styled from "styled-components";

const StyledDiv = styled.div`
  color: var(--color-visited);
  border: 1px solid var(--color-visited);
  border-radius: var(--border-radius-sm);
  padding: 0.7rem 2rem;
  font-size: 2rem;
`;

function TopRightDiv({ text }) {
  return (
    <>
      <StyledDiv>{text}</StyledDiv>
    </>
  );
}

export default TopRightDiv;
