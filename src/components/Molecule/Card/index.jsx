import {
  StyledDiv,
  StyledGit,
  StyledImg,
  StyledImgGit,
  StyledImgSite,
  StyledNameProject,
  StyledSite,
  StytledLogoDiv,
} from "./style";

export const CardProjects = ({ element }) => {
  return (
    <>
      <StyledDiv>
        <StyledNameProject>{element.nome}</StyledNameProject>
        <StyledImg src={element.foto} />
        <StytledLogoDiv>
          <StyledGit target="_blank" href={element.github}>
            <StyledImgGit src={element.github_logo} />
          </StyledGit>
          <StyledSite target="_blank" href={element.site}>
            <StyledImgSite src={element.site_logo} />
          </StyledSite>
        </StytledLogoDiv>
      </StyledDiv>
    </>
  );
};
