import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Svg, { Ellipse } from "react-native-svg";
import { Dimensions } from "react-native";

import TopBar from "../../components/TopBar";
import Rating from "../../components/Rating";

import {
  Scroll,
  Container,
  Header,
  Title,
  StatsContainer,
  Stat,
  StatTitle,
  StatValue,
  ImageContainer,
  Image,
  PriceContainer,
  PriceText,
  DetailsContainer,
  DetailTitle,
  DetailText,
  BottomBar,
  BuyButton,
  BuyButtonText,
  FavoriteButton,
} from "./styles";

import plantImg from "../../assets/3606.png";

const { width } = Dimensions.get("screen");

function Details() {
  return (
    <>
      <Scroll>
        <Container>
          <Header>
            <TopBar />
            <Title>Details</Title>
          </Header>
          <Svg width={width} height={120}>
            <Ellipse cx={width / 2} cy="-20" rx={250} ry="90" fill="#05986A" />
          </Svg>
          <StatsContainer>
            <Stat>
              <StatTitle>Reviews</StatTitle>
              <Rating />
            </Stat>
            <Stat>
              <StatTitle>Family</StatTitle>
              <StatValue>Gimbarg</StatValue>
            </Stat>
            <Stat>
              <StatTitle>Size</StatTitle>
              <StatValue>Height: 62 Inc</StatValue>
            </Stat>
            <Stat>
              <StatTitle>Cetagory</StatTitle>
              <StatValue>Indor</StatValue>
            </Stat>
          </StatsContainer>
          <ImageContainer>
            <Image source={plantImg} />
            <PriceContainer>
              <PriceText>Price: $200</PriceText>
            </PriceContainer>
          </ImageContainer>
          <DetailsContainer>
            <DetailTitle>Details</DetailTitle>
            <DetailText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </DetailText>
          </DetailsContainer>
        </Container>
      </Scroll>
      <BottomBar>
        <BuyButton>
          <BuyButtonText>buy it now</BuyButtonText>
        </BuyButton>
        <FavoriteButton>
          <Icon name="heart-outline" size={25} color="#ffffff" />
        </FavoriteButton>
      </BottomBar>
    </>
  );
}

export default Details;
