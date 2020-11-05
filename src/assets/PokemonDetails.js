import styled from 'styled-components';

export const PokemonWrapper = styled.div`
  display: flex;
  min-height: 86.8vh;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-around;
  background-repeat: no-repeat;
  transition: 0.3s;
  overflow: hidden;
  border-radius: 5px;
`;

export const PokemonHeader = styled.div`
  height: 5rem;
  text-align: center;
  margin: 1rem 0rem;
  font-weight: bold;
`;
export const PokemonImg = styled.img`
  /* height: 100%; */
  max-width: 30%;
  flex: 0 10rem;
  object-fit: contain;
`;
export const PokemonDetailsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* justify-items: space-between; */
  background-color: #fff;
  border-radius: 1rem;
  height: 30vh;
  padding: 2rem;
  margin: 1rem;
  width: 20rem;
  max-width: 50%;
`;
export const PokemonDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex: 1;
  flex-wrap: wrap;
  border-radius: 1rem;
`;
export const PokemonAttributesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Paragraph = styled.p`
  font-weight: 400;
`;
export const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  background-color: #fff;
  text-align: center;
  height: 2rem;
  margin: 1rem;
  border-radius: 1rem;
  cursor: pointer;
`;

export const StatsBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.5rem;
`;
export const ProgressBar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  padding: 1px;
  margin: 0.1rem;
  border-radius: 1rem;
`;
export const ProgressBarFill = styled.span`
  display: block;
  height: 1.2rem;
  background-color: #659cef;
  border-radius: 1rem;
  width: ${(props) => (props.width > 100 ? `${100}%` : `${props.width}%`)};
  transition: width 3s ease-in;
  span {
    padding: 0rem 1rem;
  }
`;
