import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { Container, Button, ProfileImg } from "./styles";

import profileImg from "../../assets/profile.jpg";

function BottomBar() {
  return (
    <Container>
      <Button>
        <Icon name="heart-outline" size={25} color="#ffffff" />
      </Button>
      <Button>
        <Icon name="cart-outline" size={25} color="#ffffff" />
      </Button>
      <Button>
        <Icon name="home-outline" size={25} color="#ffffff" />
      </Button>
      <Button>
        <Icon name="expand-outline" size={25} color="#ffffff" />
      </Button>
      <Button>
        <ProfileImg source={profileImg} />
      </Button>
    </Container>
  );
}

export default BottomBar;
