import React from "react";
import spinner from "./spinner.svg";
import { SpinnerText, StyledSpinner } from "./Spinner.style";
import { PageContainer } from "../../globalStyles";

const Spinner = () => {
  return (
    <PageContainer>
      <StyledSpinner src={spinner} />
      <SpinnerText>Loading...</SpinnerText>
    </PageContainer>
  );
};

export default Spinner;
