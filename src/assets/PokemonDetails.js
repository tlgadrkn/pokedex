import styled from "styled-components";

export const PokemonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 81.5vh;
  padding: 1rem;
  /* flex-direction: column; */
  justify-content: space-around;
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
  margin: 2rem 0rem;
  font-weight: bold;
`;
export const PokemonImg = styled.img`
  /* height: 100%; */
  max-width: 40%;
  flex: 0 10rem;
  object-fit: contain;
`;
export const PokemonDetailsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* justify-items: space-between; */
  flex-direction: column;
  background-color: #fff;
  border-radius: 1rem;
  height: 30vh;
  padding: 2rem;
  margin: 1rem;
  max-width: 50%;
`;
export const PokemonDetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  border-radius: 1rem;
  border: 1px solid black;
  /* max-width: 50%; */
`;
export const PokemonAttributesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Paragraph = styled.p`
  font-weight: 400;
`;
export const SpanButton = styled.span`
  border: none;
  padding: 0rem 0.2rem;
  text-align: center;
`;
