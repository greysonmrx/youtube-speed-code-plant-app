import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 650px;
  background-color: #05986a;
  align-items: center;
  border-bottom-left-radius: 500px;
  border-bottom-right-radius: 500px;
`;

export const HeaderWrapper = styled.View`
  width: ${width}px;
  height: 380px;
  align-items: center;
  padding: 0 25px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #ffffff;
  font-family: "Raleway-Bold";
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-family: "Circular Std Book";
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const DetailText = styled.Text`
  font-size: 12px;
  color: #ffffff;
  font-family: "Circular Std Book";
`;

export const Separator = styled.View`
  margin: 0 20px;
  height: 15px;
  width: 1px;
  background-color: #ffffff;
`;

export const Image = styled.Image`
  position: absolute;
  bottom: -25px;
  width: 260px;
`;

export const PrevButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #01714e;
  border-radius: 22.5px;
  bottom: 15px;
  left: 40px;
  elevation: 5;
`;

export const NextButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #01714e;
  border-radius: 22.5px;
  bottom: 15px;
  right: 40px;
  elevation: 5;
  transform: rotateY(180deg);
`;

export const SearchContainer = styled.View`
  margin-top: 32px;
  align-items: center;
  width: 100%;
  padding: 0 70px;
`;

export const SearchTitle = styled.Text`
  font-size: 24px;
  color: #0b0e26;
  font-family: "Raleway-Bold";
`;

export const SearchInputContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: #f6f6f6;
  margin-top: 18px;
  border-radius: 20px;
  justify-content: center;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "#05986a",
})`
  height: 100%;
  padding: 0 40px 0 15px;
  color: #05986a;
  font-family: "Raleway-Bold";
  font-size: 16px;
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  right: 15px;
`;

export const PlantList = styled.ScrollView`
  height: 300px;
`;

export const PlantContent = styled.View`
  flex-direction: row;
  margin: 120px 20px 0 20px;
`;

export const PlantCard = styled.TouchableOpacity`
  margin: 0 10px;
  width: 131px;
  height: 137px;
  background-color: #05986a;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
  border-radius: 5px;
  elevation: 5;
`;

export const PlantImage = styled.Image`
  position: absolute;
  top: -95px;
  height: 170px;
`;

export const PlantDetails = styled.View`
  align-items: center;
`;

export const PlantDetailsText = styled.Text`
  font-size: 14px;
  font-family: "Raleway-Medium";
  color: #ffffff;
`;
