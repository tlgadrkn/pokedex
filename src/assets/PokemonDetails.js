import styled from "styled-components";

export const PokemonWrapper = styled.div`
  display: flex;
  padding: 1rem;
  /* flex-direction: column; */
  justify-content: space-between;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
  background-repeat: no-repeat;
  box-shadow: 0px 4px 8px 0 rgb(206, 205, 205);
  transition: 0.3s;
  overflow: hidden;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const PokemonHeader = styled.div`
  text-align: center;
`;
export const PokemonImg = styled.img`
  height: 20rem;
  flex: 0 10rem;
`;
export const PokemonDetails = styled.div`
  flex: 1 30rem;
`;
export const SpanButton = styled.span`
  border: none;
  padding: 1rem 1.5rem;
  text-align: center;
  text-decoration: none;
  margin: 1rem;
  transition-duration: 0.4s;
  background-color: rgba(0, 0, 0, 0.1);
  border: 2px solid #008cba;
  cursor: pointer;
  &:hover {
    background-color: #008cba;
    color: white;
  }
`;
