import styled from "styled-components";

const StyledDiv = styled.div`
  color: var(--color-visited);
  border: 1px solid var(--color-visited);
  border-radius: var(--border-sm);
  padding: 0.5rem 1rem;
  font-size: 2rem;
  height: 4rem;
`;

function TopRightDiv({ text }) {
  return (
    <>
      <StyledDiv>{text}</StyledDiv>
    </>
  );
}

export default TopRightDiv;
