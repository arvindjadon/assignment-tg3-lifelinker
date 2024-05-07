import styled, { css } from "styled-components";

const StyledList = styled.li`
  font-size: 2.1rem;
  font-weight: 500;
`;

const StyledText = styled.p`
  font-size: 4rem;
  font-weight: 700;
  ${(props) => css`
    color: ${props.color};
  `}
`;

function Card({ data }) {
  return (
    <StyledList>
      <p>{data.name}</p>
      <StyledText color={data.color}>{data.value}</StyledText>
    </StyledList>
  );
}

export default Card;
