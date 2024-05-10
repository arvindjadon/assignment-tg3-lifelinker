import styled from "styled-components";

const StyledStat = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-sm);
  padding: 1.6rem;
  display: grid;
  grid-template-columns: 1fr 6.4rem;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`;

const Text = styled.span`
  grid-column: 1/3;
  font-weight: 500;
  ${(props) => `
    color: ${props.color}
    `}
`;

const Icon = styled.div`
  grid-column: 2 / 3;
  grid-row: 1/2;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-purple-100);
  }
`;

const Title = styled.p`
  align-self: end;
  font-size: 2rem;
  letter-spacing: 0.4px;
  color: var(--color-visited);
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  color: var(--color-visited);
`;

function Stat({ icon, title, value, color, text }) {
  return (
    <StyledStat>
      <Value>{value}</Value>
      <Title>{title}</Title>
      <Icon>{icon}</Icon>
      <Text color={color}>{text} since last year</Text>
    </StyledStat>
  );
}

export default Stat;
