import styled from "styled-components";
import { ORANGE_YELLOW } from "../../constants";
import img from "../../images/background.jpg";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 300px;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  display: flex;
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 15px;
  color: #fff;
  text-align: center;
`;

export const HeroLittle = styled.p`
  display: flex;
  margin-top: 10px;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const ImageContainer = styled.div`
  z-index: 1;
  width: 100%;
  margin-top: 50px;
  padding-right: 30px;
  padding-left: 30px;
  margin-bottom: 150px;
`;

//SingleImage

export const ShowSingleImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10px;
`;

export const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  align-self: content;
`;

export const Text = styled.div`
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid ${ORANGE_YELLOW};
  font-size: 20px;
`;

export const ShowSingleImageWrapper = styled.div`
  background: none;
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  font-size: 18px;
  align-self: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  transition: all 5s ease-in-out;
  background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  justify-self: center;
  justify-content: center;
  z-index: 999;
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  cursor: pointer;
`;

export const StyledImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  background-position: center;
  transition: opacity ease-out 0.4s;
  object-fit: cover;
  border-radius: 40px;
`;
