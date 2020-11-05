import styled from 'styled-components';
import { setSpanColor } from '../utils/helperFunctions';
export const Card = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-between;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0px 4px 8px 0 rgb(206, 205, 205);
  transition: 0.3s;
  overflow: hidden;
  border-radius: 5px;
  min-width: 10rem;
  max-width: 20rem;
  &:hover {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* object-fit: cover; */
  overflow: hidden;
  height: 20rem;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 7.5rem;
`;
export const CardHeader = styled.h3`
  /* text-transform: uppercase; */
  line-height: 1.4;
  margin-bottom: 1rem;
`;

export const CardSpan = styled.span`
  padding: 0.5rem 2rem;
  color: #fff;
  border-radius: 5px;
  margin: 0.2rem;
  background-color: ${(props) => setSpanColor(props.type)};
`;
