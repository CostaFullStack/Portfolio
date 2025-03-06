import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cursosDeProgramacao } from "../../mocks/courses";
import {
  StyledDescripition,
  StyledDiv,
  StyledDuration,
  StyledImg,
  StyledNameCourse,
  StyledSection,
  StyledSpanDuration,
} from "./style";

export const Course = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState();

  useEffect(() => {
    cursosDeProgramacao.forEach((element) => {
      if (element.id === +id) {
        setCurso(element);
      }
    });
  }, []);
  return (
    <>
      <StyledSection>
        {curso && (
          <StyledDiv>
            <StyledNameCourse>{curso.nome}</StyledNameCourse>
            <StyledImg src={curso.foto} alt={`Foto do curso ${curso.nome}`} />
            <StyledDescripition>{curso.descricao}</StyledDescripition>
            <StyledDuration>Duração:<StyledSpanDuration valor={curso.duracao}>{curso.duracao} horas</StyledSpanDuration></StyledDuration>
          </StyledDiv>
        )}
      </StyledSection>
    </>
  );
};
