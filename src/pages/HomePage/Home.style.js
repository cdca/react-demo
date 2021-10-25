import styled from "styled-components";
import { BROWN, BROWN_LIGHT, LAPTOP_BREAK, PHONE_BREAK } from "../../constants";

export const Body = styled.div`
  color: #fff;
  padding: 150px 0;
  background: ${(props) => (props.swap ? `${BROWN}` : `${BROWN_LIGHT}`)};
  @media (max-width: ${LAPTOP_BREAK}) {
    padding: 50px 0;
  }
`;

export const TextWrapper = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  margin-right: 20px;
  @media screen and (max-width: ${PHONE_BREAK}) {
    padding-bottom: 65px;
  }
`;
export const TopLine = styled.div`
  color: ${(props) => (props.swap ? `${BROWN_LIGHT}` : `${BROWN}`)};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #ffe7d6;
`;
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
`;
export const StyledImg = styled.img`
  max-width: 100%;
  max-height: 400px;
`;
