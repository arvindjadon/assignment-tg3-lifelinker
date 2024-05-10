import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CiMedicalCross } from "react-icons/ci";
import { GiEmbryo } from "react-icons/gi";
import { BsFillCalculatorFill } from "react-icons/bs";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 59rem) {
    /* width: 100%; */
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-white);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-visited);
    background-color: var(--color-sidebar-selected);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-sidebar-background);
  }

  @media (max-width: 59rem) {
    &:link,
    &:visited {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      color: var(--color-white);
      font-size: 2rem;
      font-weight: 500;
      padding: 1.2rem 2.4rem;
      transition: all 0.3s;
    }

    @media (max-width: 34rem) {
      &:link,
      &:visited {
        font-size: 3rem;
      }
    }
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <span>Home</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/clinical">
            <CiMedicalCross />
            <span>Clinical</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/embrology">
            <GiEmbryo />
            <span>Embrology</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/accounts">
            <BsFillCalculatorFill />
            <span>Purchase & Accounts</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/clinical">
            <CiMedicalCross />
            <span>Clinical</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/embrology">
            <GiEmbryo />
            <span>Embrology</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/accounts">
            <BsFillCalculatorFill />
            <span>Purchase & Accounts</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/clinical">
            <CiMedicalCross />
            <span>Clinical</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/embrology">
            <GiEmbryo />
            <span>Embrology</span>
          </StyledNavLink>
        </li>
        <hr />
        <li>
          <StyledNavLink to="/accounts">
            <BsFillCalculatorFill />
            <span>Purchase & Accounts</span>
          </StyledNavLink>
        </li>
        <hr />
      </NavList>
    </nav>
  );
}

export default MainNav;
