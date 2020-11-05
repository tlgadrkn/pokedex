import styled from 'styled-components';

export const Nav = styled.nav`
  height: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  padding: 1rem;
  color: #f1f1f1;
  margin-bottom: 1rem;
`;
export const NavLogo = styled.div`
  align-self: center;
  h2 {
    font-size: 2rem;
  }
`;
export const NavbarItems = styled.div`
  display: flex;
  width: 65%;
  justify-content: space-between;
  justify-items: flex-start;
`;
export const NavbarInputGroup = styled.div`
  align-self: center;
  display: flex;
  width: 100%;
  justify-content: stretch;
`;
export const NavbarForm = styled.form`
  align-self: center;
  display: flex;
  width: 50%;
  justify-content: stretch;
`;

export const NavbarButton = styled.button`
  align-self: center;
  height: 2.5rem;
  cursor: pointer;
  border-radius: 0.3rem;
  border: 1px solid #8095ff;
  padding: 0.75rem 0.5rem;
  background: #fff;
  /* position: fixed; */
  /* z-index: 9999; */
  &:hover {
    background: transparent;
    transition: background ease-in-out 0.2s;
    color: #fff;
    border-color: #fff;
  }
`;
export const NavbarInputButton = styled.button`
  align-self: center;
  height: 2rem;
  width: 3rem;
  cursor: pointer;
  border-radius: 0.3rem;
  border: 1px solid #8095ff;
  padding: 0.5rem;
  margin-left: 1rem;
  background: #fff;
  &:hover {
    background: transparent;
    transition: background ease-in-out 0.2s;
    color: #fff;
    border-color: #fff;
  }
`;
export const NavbarLabel = styled.label`
  align-self: center;
`;
export const NavbarInput = styled.input`
  align-self: center;
  height: 2rem;
  margin-left: 1rem;
  border-radius: 0.3rem;
  border: 1px solid #8095ff;
  padding: 0.5rem;
`;
