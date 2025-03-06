import {
  StyledAbout,
  StyledDivHistory,
  StyledHistory,
  StyledSection,
} from "./style";

export const About = () => {
  return (
    <>
      <StyledSection>
        <StyledAbout>Sobre</StyledAbout>
        <StyledDivHistory>
          <StyledHistory>
            Olá, meu nome é Matheus. Utilizo computadores desde os meus 12 anos
            de idade, possuo uma grande experiência. Criei uma grande
            familiaridade com a linguagem Python, Banco de dados Mysql e JavaScript.
            Finalizei o curso de HTML/CSS, Python e JavaScript e estou me aperfeiçoando em React e Flask.
            Tenho um ótimo conhecimento sobre git, github e VScode, sei
            manuseá-los com bastante tranquilidade, assim como as suas extensões
            e estou preparado para entrar no mercado e mostrar o meu potencial.
          </StyledHistory>

        </StyledDivHistory>
      </StyledSection>
    </>
  );
};
