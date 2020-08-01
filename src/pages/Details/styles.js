import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const Container = styled.View``;

export const Header = styled.View`
  width: 100%;
  height: 55px;
  align-items: center;
  background-color: #05986a;
  z-index: 10;
  padding: 0 25px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-family: "Raleway-Bold";
`;

export const StatsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 15px;
`;

export const Stat = styled.View``;

export const StatTitle = styled.Text`
  font-size: 14px;
  color: #1b203b;
  font-family: "Circular Std Book";
  margin-bottom: 5px;
`;

export const StatValue = styled.Text`
  font-size: 12px;
  color: #05986a;
  font-family: "Circular Std Book";
`;

export const ImageContainer = styled.View`
  width: ${width}px;
  height: ${width}px;
  border-radius: ${width / 2}px;
  background-color: #f2f2f2;
  margin: 50px 0;
`;

export const Image = styled.Image``;

export const PriceContainer = styled.View`
  position: absolute;
  width: ${width / 2}px;
  justify-content: center;
  height: 60px;
  background-color: #05986a;
  right: 0;
  bottom: 60px;
  border-top-left-radius: ${width / 4}px;
  border-bottom-left-radius: ${width / 4}px;
  padding-left: 30px;
`;

export const PriceText = styled.Text`
  font-size: 22px;
  color: #ffffff;
  font-family: "Circular Std Book";
`;

export const DetailsContainer = styled.View`
  padding: 0 25px;
  margin-bottom: 30px;
`;

export const DetailTitle = styled.Text`
  font-size: 24px;
  color: #1b203b;
  font-family: "Circular Std Book";
  margin-bottom: 15px;
`;

export const DetailText = styled.Text`
  font-size: 14px;
  color: #6d6e7b;
  font-family: "Circular Std Book";
  line-height: 20px;
`;

export const BottomBar = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
`;

export const BuyButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #05986a;
`;

export const BuyButtonText = styled.Text`
  text-transform: uppercase;
  font-size: 22px;
  color: #ffffff;
  font-family: "Circular Std Book";
`;

export const FavoriteButton = styled.TouchableOpacity`
  height: 100%;
  width: 80px;
  justify-content: center;
  align-items: center;
  background-color: #01714e;
`;
