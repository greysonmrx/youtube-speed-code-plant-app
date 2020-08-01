import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const Container = styled.View`
  height: 60px;
  width: 100%;
  background-color: #01714e;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  width: ${width / 5}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ProfileImg = styled.Image`
  width: 39px;
  height: 39px;
  border-radius: 19.5px;
`;
