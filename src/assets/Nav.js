import styled from "styled-components";

export const Nav = styled.nav`
  height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  padding: 1rem;
  color: #f1f1f1;
  margin-bottom: 2rem;
`;
export const NavLogo = styled.div`
  align-self: center;
`;
export const NavbarItems = styled.div`
  /* border: 1px solid black; */
  display: flex;
  width: 65%;
  justify-content: space-between;
  justify-items: flex-start;
`;

export const NavbarButton = styled.button`
  align-self: center;
  height: 2.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px solid #8095ff;
  padding: 0.75rem 0.5rem;
  background: #fff;
  &:hover {
    background: transparent;
    transition: background ease-in-out 0.2s;
  }
`;
export const NavbarInput = styled.input`
  align-self: center;
  height: 3rem;
  width: 50%;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #8095ff;
  padding: 0.5rem 0.25rem;
  &::placeholder {
    padding: 0 1rem;
  }
`;
