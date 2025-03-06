import styled, { keyframes } from "styled-components";

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
export const StyledNome = styled.h1`
  font-size: 90px;
  color: #0d0d0d;
`;

const floating = keyframes`
 0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); } 
  100% { transform: translateY(0px); }
`;
export const StyledImgProfile = styled.img`
  width: 250px;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  box-shadow: 0px 0px 15px #0d0d0d;
  animation: ${floating} 2.5s ease-in-out infinite;
`;
