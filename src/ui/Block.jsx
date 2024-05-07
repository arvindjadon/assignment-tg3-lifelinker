import styled from "styled-components";
import Card from "./Card";
import Heading from "./Heading";

const data = [
  {
    name: "Rajouri Garden",
    value: 7000,
    color: "#4ac2b6",
  },
  {
    name: "Patel Nagar",
    value: 1100,
    color: "#fbc00c",
  },
  {
    name: "Vasant Kunj",
    value: 3500,
    color: "#f9a119",
  },
  {
    name: "Tilak Nagar",
    value: 1700,
    color: "#f9645d",
  },
  {
    name: "Rohini",
    value: 1100,
    color: "#2097f5",
  },
  {
    name: "Lajpat Nagar",
    value: 1050,
    color: "#8583fe",
  },
  {
    name: "Dwarka",
    value: 1750,
    color: "#46d899",
  },
  {
    name: "Saket",
    value: 2200,
    color: "#5a5adc",
  },
  {
    name: "Hauz Khas",
    value: 2400,
    color: "#12cef3",
  },
];

const StyledCards = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const StyledBlock = styled.div`
  background-color: var(--color-white);
  padding: 2rem 2.5rem;
  grid-column: 1 /3;
  border-radius: var(--border-radius-md);
`;

function Block() {
  return (
    <StyledBlock>
      <Heading as="h2">Areas</Heading>
      <StyledCards>
        {data.map((entry) => (
          <Card key={entry.name} data={entry} />
        ))}
      </StyledCards>
    </StyledBlock>
  );
}

export default Block;
