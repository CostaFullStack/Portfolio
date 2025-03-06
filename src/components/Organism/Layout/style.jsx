import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledBody = styled.body`
  font-family: "Poppins", serif;
  height: 100vh;
  background-image: url("https://i.redd.it/fisnfas5ip7c1.gif");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledHeader = styled.header`
  background-color: #ff007f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;

export const StyledDivTitle = styled.div`
  margin-left: 41vh;
`;
export const StyledNav = styled.nav`
  margin-right: 41vh;

`;

export const StyledTitle = styled.h2`
  background-color: #1a1a1a;
  color: #ff66b2;
  border-radius: 30px;
  cursor: pointer;
  padding: 20px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    padding 0.3s ease-in-out;

  &:hover {
    background-color: #ffdd00;
    color: #1a1a1a;
  }
`;

export const StyledItemMenu = styled(Link)`
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.3s ease-in-out, padding 0.3s ease-in-out;
  &:hover {
    color: #ffdd00;
    padding: 10px;
    text-decoration: underline;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 25px;
`;

export const StyledMain = styled.main`
  padding: 20px;
`;
export const StyledFooter = styled.footer`
  background-color: #ff007f;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 40px;
  gap: 20px;
`;
export const StyledDireitos = styled.p``;
export const StyledDireitos2 = styled.p``;
