import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BROWN, ORANGE_YELLOW } from "../../constants";

export const Heading = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  padding: 20px 0;
`;

export const Heading2 = styled.h2`
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;
export const Text = styled.p`
  margin: 0;
  color: #fff;
`;

export const SearchBox = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${ORANGE_YELLOW};
  padding: 16px 16px 24px 16px;
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  height: 56px;
  padding: 16px;
  width: 100%;
  position: relative;
  margin: 16px 0;

  option {
    color: gray;
    background: #fff;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const ResultsItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  text-align: left;
  padding: 8px 0;
  border-bottom: 1px solid ${ORANGE_YELLOW};
`;

export const MapWrapper1 = styled.div`
  height: 300px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 50px;
  margin-bottom: 150px;
`;

export const MapStyled = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;
export const StyledForm = styled.form``;

export const Marker = styled(FaMapMarkerAlt)`
  font-size: 2rem;
  color: ${BROWN};
`;
