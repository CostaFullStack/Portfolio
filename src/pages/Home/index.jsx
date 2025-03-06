import { StyledImgProfile, StyledNome, StyledSection } from "./style";

export const Home = () => {
  return (
    <>
      <StyledSection>
        <StyledImgProfile
          src="https://img.freepik.com/premium-photo/cyberpunk-style-programmer-working-late-night-surrounded-by-multiple-screens-dark-room-with-neon-lights-modern-coding-lifestyle-ai_372197-16062.jpg"
          alt="Imagem de uma pessoa programando"
        />
        <StyledNome>Matheus Costa</StyledNome>
      </StyledSection>
    </>
  );
};
