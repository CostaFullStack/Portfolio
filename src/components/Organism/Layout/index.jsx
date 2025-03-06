import { Outlet } from "react-router-dom";
import {
  StyledBody,
  StyledDireitos,
  StyledDireitos2,
  StyledDivTitle,
  StyledFooter,
  StyledHeader,
  StyledItemMenu,
  StyledMain,
  StyledNav,
  StyledTitle,
  StyledUl,
} from "./style";

export const Layout = () => {
  return (
    <>
      <StyledBody>
        <StyledHeader>
          <StyledDivTitle>
            <StyledItemMenu to={"/"}>
              <StyledTitle>Portfólio Matheus Costa</StyledTitle>
            </StyledItemMenu>
          </StyledDivTitle>
          <StyledNav>
            <StyledUl>
              <li>
                <StyledItemMenu to={"/"}>Início</StyledItemMenu>
              </li>
              <li>
                <StyledItemMenu to={"/sobre"}>Sobre</StyledItemMenu>
              </li>
              <li>
                <StyledItemMenu to={"/cursos"}>Cursos</StyledItemMenu>
              </li>
              <li>
                <StyledItemMenu to={"projetos"}>Projetos</StyledItemMenu>
              </li>
            </StyledUl>
          </StyledNav>
        </StyledHeader>

        <StyledMain>
          <Outlet />
        </StyledMain>

        <StyledFooter>
          <StyledDireitos>Portfólio de programação front-end</StyledDireitos>
          <StyledDireitos2>© Todos os direitos reservados</StyledDireitos2>
        </StyledFooter>
      </StyledBody>
    </>
  );
};
