import styled from "styled-components";

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
  &:hover {
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardImg = styled.div`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 7.5rem;
`;

export const CardSpan = styled.span`
  padding: 0.25rem 0.5rem;
  color: #fff;
  background-color: #333;
  margin: 0.1rem;
`;
