import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Button,
  Column,
  Row,
  PageContainer,
} from "../../globalStyles";
import {
  Heading,
  Body,
  Subtitle,
  TextWrapper,
  TopLine,
  ImgWrapper,
  StyledImg,
} from "./Home.style";

import image1 from "../../images/home1.svg";
import image2 from "../../images/home2.svg";
import image3 from "../../images/home3.svg";
import image4 from "../../images/home4.svg";

function Home() {
  return (
    <PageContainer>
      <Body>
        <Container>
          <Row>
            <Column>
              <TextWrapper>
                <TopLine>React demo app</TopLine>
                <Heading>React app to call Images, Map and Joke API</Heading>
                <Subtitle>
                  In this app there are 3 sections that are calling several
                  APIs. You can check them on links in header or scroll down to
                  see more info.
                </Subtitle>
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrapper>
                <StyledImg src={image1} alt="Image1" />
              </ImgWrapper>
            </Column>
          </Row>
        </Container>
      </Body>

      <Body swap>
        <Container>
          <Row swap>
            <Column>
              <TextWrapper>
                <TopLine swap>Flickr images</TopLine>

                <Heading>Find awesome images using Flickr API</Heading>
                <Subtitle>
                  Search for images through this app. Easily find whatever you
                  need. Search for cats, dogs and all other animals. You can
                  click on image to see full info. Anything is possible.
                </Subtitle>
                <Link to="/images">
                  <Button>Search images</Button>
                </Link>
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrapper>
                <StyledImg src={image2} alt="Image2" />
              </ImgWrapper>
            </Column>
          </Row>
        </Container>
      </Body>
      <Body>
        <Container>
          <Row>
            <Column>
              <TextWrapper>
                <TopLine>IP checker</TopLine>

                <Heading>Find any IP location on our map</Heading>
                <Subtitle>
                  We use IP lookup and google map API to show you your current
                  location. You can search for specific domain or popular ones.
                </Subtitle>
                <Link to="/map">
                  <Button>Find location</Button>
                </Link>
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrapper>
                <StyledImg src={image3} alt="Image3" />
              </ImgWrapper>
            </Column>
          </Row>
        </Container>
      </Body>
      <Body swap>
        <Container>
          <Row swap>
            <Column>
              <TextWrapper>
                <TopLine swap>Funny jokes</TopLine>

                <Heading>Generate joke using our Joke API</Heading>
                <Subtitle>
                  You can select type of joke you want to see and rest is on us.
                  Be careful there are some dark ones.
                </Subtitle>
                <Link to="/joke">
                  <Button>Select joke</Button>
                </Link>
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrapper>
                <StyledImg src={image4} alt="Image4" />
              </ImgWrapper>
            </Column>
          </Row>
        </Container>
      </Body>
    </PageContainer>
  );
}

export default Home;
