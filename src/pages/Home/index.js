import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";

import {
  Scroll,
  Container,
  Header,
  HeaderWrapper,
  Title,
  SubTitle,
  Details,
  DetailText,
  Separator,
  Image,
  PrevButton,
  NextButton,
  SearchContainer,
  SearchTitle,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  PlantList,
  PlantContent,
  PlantCard,
  PlantImage,
  PlantDetails,
  PlantDetailsText,
} from "./styles";

import plant1Img from "../../assets/3522.png";
import plant2Img from "../../assets/3767.png";
import plant3Img from "../../assets/3592.png";
import plant4Img from "../../assets/3606.png";

function Home() {
  const navigation = useNavigation();

  const [plants] = useState([
    {
      id: "1",
      name: "Gbit Plant",
      price: "$88",
      image: plant2Img,
    },
    {
      id: "2",
      name: "Gbit Plant",
      price: "$88",
      image: plant3Img,
    },
    {
      id: "3",
      name: "Gbit Plant",
      price: "$88",
      image: plant2Img,
    },
    {
      id: "4",
      name: "Gbit Plant",
      price: "$88",
      image: plant4Img,
    },
  ]);

  const handleGoToDetails = useCallback(() => {
    navigation.navigate("Details");
  }, []);

  return (
    <>
      <Scroll>
        <Container>
          <Header>
            <HeaderWrapper>
              <TopBar />
              <Title>Our Plants</Title>
              <SubTitle>Lorem Ipsum Dammy Plants</SubTitle>
              <Details>
                <DetailText>Price: $66</DetailText>
                <Separator />
                <DetailText>Size: Medium</DetailText>
                <Separator />
                <DetailText>Plant: Gimam</DetailText>
              </Details>
              <Image source={plant1Img} />
              <PrevButton>
                <MaterialCommunityIcons
                  name="keyboard-backspace"
                  size={22}
                  color="#ffffff"
                />
              </PrevButton>
              <NextButton>
                <MaterialCommunityIcons
                  name="keyboard-backspace"
                  size={22}
                  color="#ffffff"
                />
              </NextButton>
            </HeaderWrapper>
          </Header>
          <SearchContainer>
            <SearchTitle>Explore More</SearchTitle>
            <SearchInputContainer>
              <SearchInput placeholder="Search |" />
              <SearchIcon name="search" size={22} color="#05986A" />
            </SearchInputContainer>
          </SearchContainer>
          <PlantList horizontal>
            <PlantContent>
              {plants.map((plant) => (
                <PlantCard key={plant.id} onPress={handleGoToDetails}>
                  <PlantImage source={plant.image} resizeMode="contain" />
                  <PlantDetails>
                    <PlantDetailsText>{plant.name}</PlantDetailsText>
                    <PlantDetailsText>${plant.price}</PlantDetailsText>
                  </PlantDetails>
                </PlantCard>
              ))}
            </PlantContent>
          </PlantList>
        </Container>
      </Scroll>
      <BottomBar />
    </>
  );
}

export default Home;
