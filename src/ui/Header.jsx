import styled from "styled-components";
import Logo from "./Logo";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import TopRightDiv from "../ui/TopRightDiv";
import { CiBellOn } from "react-icons/ci";

const StyledHeader = styled.aside`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Bell = styled.div`
  width: 4rem;
  height: 4rem;
  border: 1px solid var(--color-bell);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-bell);
  }
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <Logo type="large" />
      </StyledHeader>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <Row type="horizontal">
          <TopRightDiv text="Queue" />
          <TopRightDiv text="1 Feb, 2024 - 4 Mar, 2024" />
          <Bell>
            <CiBellOn />
          </Bell>
          <Logo type="small" />
        </Row>
      </Row>
    </>
  );
}

export default Header;
