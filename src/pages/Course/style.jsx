import styled from "styled-components";

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
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const StyledNameCourse = styled.h2`
  font-size: 40px;
  color: #ffdd00;
`;
export const StyledImg = styled.img`
  border-radius: 50%;
  width: 30vh;
  height: 30vh;
  box-shadow: 0px 0px 15px #0d0d0d;
`;
export const StyledSpanDuration = styled.span`
  font-size: ${(props) => props.valor}px;
  color: ${(props) =>
    props.valor >= 20 && props.valor <= 30
      ? "#28A745"
      : props.valor >= 31 && props.valor <= 50
      ? "#FFA500"
      : "#FF1E1E"};
`;

export const StyledDuration = styled.p`
  font-size: 20px;
  color: #0d0d0d;
`;
export const StyledDescripition = styled.p`
  font-size: 20px;
  text-align: center;
  color: #0d0d0d;
  letter-spacing: 3px;
`;

export const StyledSpan = styled.span`
  color: #ffdd00;
`;
