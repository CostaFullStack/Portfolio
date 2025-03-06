import { cursosDeProgramacao } from "../../mocks/courses";
import {
  StyledCourses,
  StyledDivList,
  StyledLi,
  StyledLista,
  StyledListaA,
  StyledSection,
} from "./style";

export const Courses = () => {
  return (
    <>
      <StyledSection>
        <StyledCourses>Cursos</StyledCourses>
        <StyledDivList>
          <StyledLista>
            {cursosDeProgramacao &&
              cursosDeProgramacao.map((element) => (
                <StyledLi>
                  <StyledListaA to={`/curso/${element.id}`}>
                    {element.nome}
                  </StyledListaA>
                </StyledLi>
              ))}
          </StyledLista>
        </StyledDivList>
      </StyledSection>
    </>
  );
};
