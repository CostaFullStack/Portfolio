import styled from "styled-components";

export const StyledDiv = styled.div`
  background-color: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #1a1a1a;
  }
`;
export const StyledNameProject = styled.h2`
  color: #ff66b2;
  font-size: 20px;
`;
export const StyledImg = styled.img`
  width: 350px;
  border-radius: 10px;
`;

export const StytledLogoDiv = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledGit = styled.a``;

export const StyledImgGit = styled.img`
  width: 40px;
  transition: 0.3s ease-in-out;
  &:hover {
    /* deixando dourado ao passar o mouse */
    filter: brightness(0) saturate(100%) invert(76%) sepia(90%) saturate(500%) hue-rotate(0deg);
  }
`;

export const StyledSite = styled.a``;
export const StyledImgSite = styled.img`
  width: 40px;
  transition: 0.3s ease-in-out;
  &:hover {
    filter: brightness(0) saturate(100%) invert(76%) sepia(90%) saturate(500%) hue-rotate(0deg);
  }
`;
