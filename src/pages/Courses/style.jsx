import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #9d4edda0;
  padding: 70px;
  gap: 20px;
  width: 95vh;
  margin: 0 auto;
  border-radius: 0px 0px 50px 50px;
`;

export const StyledCourses = styled.h2`
  font-size: 40px;
  color: #ffdd00;
`;

export const StyledDivList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const StyledLista = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;


export const StyledListaA = styled(Link)`
  list-style: none;
  text-decoration: none;
  background-color: #1a1a1a;
  color: #ff66b2;
  border-radius: 30px;
  padding: 20px;
  width: 400px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    padding 0.3s ease-in-out;
  &:hover {
    background-color: #ffdd00;
    color: #1a1a1a;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
`;
