import { CardProjects } from "../../components/Molecule/Card";
import { Container } from "../../components/Organism/Container";
import { projetosDeProgramacao } from "../../mocks/projects";


export const Projects = () => {
  return (
    <>
      <Container>
        {projetosDeProgramacao &&
          projetosDeProgramacao.map((element) => (
            <CardProjects element={element} />
          ))}
      </Container>
    </>
  );
};
