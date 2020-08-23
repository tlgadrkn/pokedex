import styled from "styled-components";

export const PokemonWrapper = styled.div`
  display: flex;
  height: 81.5vh;
  padding: 1rem;
  /* flex-direction: column; */
  justify-content: space-between;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
  background-repeat: no-repeat;
  /* box-shadow: 0px 4px 8px 0 rgb(206, 205, 205); */
  transition: 0.3s;
  overflow: hidden;
  border-radius: 5px;
  &:hover {
    /* box-shadow: 0 8px 6px -6px black; */
  }
`;

export const PokemonHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  font-weight: bold;
`;
export const PokemonImg = styled.img`
  height: 20rem;
  flex: 0 10rem;
`;
export const PokemonDetailsDiv = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  background-color: #fff;
  border-radius: 1rem;
  flex: 1;
  height: 30vh;
  padding: 1rem;
  margin: 1rem;
`;
export const p = styled.p`
  font-weight: 400;
`;
export const SpanButton = styled.span`
  border: none;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  margin: 1rem;
  transition-duration: 0.4s;
  border: 1px solid #008cba;
  border-radius: 1rem;
`;
