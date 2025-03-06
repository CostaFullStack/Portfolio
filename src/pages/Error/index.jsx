import { StyledDivError, StyledH2Error } from "./style";

export const NotFound = () => {
  return (
    <>
      <StyledDivError>
        <StyledH2Error>Error 404. Not Found</StyledH2Error>
      </StyledDivError>
    </>
  );
};
