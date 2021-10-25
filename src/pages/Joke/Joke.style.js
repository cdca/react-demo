import styled from "styled-components";
import { BROWN, BROWN_LIGHT, LAPTOP_BREAK } from "../../constants";

export const JokeHeader = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${BROWN_LIGHT};
  @media (max-width: ${LAPTOP_BREAK}) {
    height: 0px;
  }
`;
export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  height: 412px;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: auto;
  max-height: 412px;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  background-position: center;
  transition: opacity ease-out 0.4s;
  border-radius: 40px;
`;
export const StyledError = styled.div`
  color: #000;
  font-weight: 700;
  margin: 0 0 40px 0;
`;
export const TextArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 412px;
  justify-content: center;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 150px;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: strong;
  font-size: 30px;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledButton = styled.button`
  display: block;
  background-color: ${BROWN};
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

export const StyledJoke = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  display: block;
`;
