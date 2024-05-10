import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  display: grid;

  &:link,
  &:visited {
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
      font-size: 2rem;
    }

    @media (max-width: 34rem) {
      &:link,
      &:visited {
        font-size: 3rem;
      }
    }
  }
`;

const StyledSpan = styled.li``;

const StyledBranchList = styled.ul`
  border-left: 1px solid black;
`;

const treeData = [
  {
    key: "0",
    label: "Business",
    children: [
      {
        key: "0-0",
        label: "Leads",
        children: [
          {
            key: "0-2-1",
            label: "Clinic",
          },
          {
            key: "0-2-2",
            label: "Source",
          },
          {
            key: "0-2-3",
            label: "Area",
          },
          {
            key: "0-2-4",
            label: "Doctors",
          },
        ],
      },
      {
        key: "0-1",
        label: "Appointments",
        children: [
          {
            key: "0-2-1",
            label: "Clinic",
          },
          {
            key: "0-2-2",
            label: "Source",
          },
          {
            key: "0-2-3",
            label: "Area",
          },
          {
            key: "0-2-4",
            label: "Doctors",
          },
        ],
      },
      {
        key: "0-2",
        label: "Visits",
        children: [
          {
            key: "0-2-1",
            label: "Clinic",
          },
          {
            key: "0-2-2",
            label: "Source",
          },
          {
            key: "0-2-3",
            label: "Area",
          },
          {
            key: "0-2-4",
            label: "Doctors",
          },
        ],
      },
      {
        key: "0-3",
        label: "Prescription",
        children: [
          {
            key: "0-2-1",
            label: "Clinic",
          },
          {
            key: "0-2-2",
            label: "Source",
          },
          {
            key: "0-2-3",
            label: "Area",
          },
          {
            key: "0-2-4",
            label: "Doctors",
          },
        ],
      },
      {
        key: "0-4",
        label: "Procedure",
        children: [
          {
            key: "0-2-1",
            label: "Clinic",
          },
          {
            key: "0-2-2",
            label: "Source",
          },
          {
            key: "0-2-3",
            label: "Area",
          },
          {
            key: "0-2-4",
            label: "Doctors",
          },
        ],
      },
      {
        key: "0-5",
        label: "Conversion",
        children: [
          {
            key: "0-2-1",
            label: "Clinic",
          },
          {
            key: "0-2-2",
            label: "Source",
          },
          {
            key: "0-2-3",
            label: "Area",
          },
          {
            key: "0-2-4",
            label: "Doctors",
          },
        ],
      },
      {
        key: "0-6",
        label: "Revenue",
        children: [
          {
            key: "0-2-1",
            label: "Clinic",
          },
          {
            key: "0-2-2",
            label: "Source",
          },
          {
            key: "0-2-3",
            label: "Area",
          },
          {
            key: "0-2-4",
            label: "Doctors",
          },
        ],
      },
      {
        key: "0-7",
        label: "Collection",
        children: [
          {
            key: "0-2-1",
            label: "Clinic",
          },
          {
            key: "0-2-2",
            label: "Source",
          },
          {
            key: "0-2-3",
            label: "Area",
          },
          {
            key: "0-2-4",
            label: "Doctors",
          },
        ],
      },
    ],
  },
];

function TreeComponent() {
  return <Tree treeData={treeData} />;
}

function Tree({ treeData }) {
  return (
    <ul>
      {treeData.map((branch) => (
        <Branch branch={branch} key={branch.key} />
      ))}
    </ul>
  );
}

function Branch({ branch }) {
  const { children, label } = branch;

  const [showBranch, setShowBranch] = useState(false);

  function handleClick() {
    setShowBranch(!showBranch);
  }

  return (
    <StyledNavLink to="#">
      <StyledSpan onClick={handleClick}>{label}</StyledSpan>
      <StyledBranchList>
        {showBranch && <Tree treeData={children} />}
      </StyledBranchList>
    </StyledNavLink>
  );
}

export default TreeComponent;
