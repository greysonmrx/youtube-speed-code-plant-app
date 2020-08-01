import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { Container, Button } from "./styles";

function TopBar() {
  return (
    <Container>
      <Button>
        <Icon name="chevron-back-outline" size={30} color="#ffffff" />
      </Button>
      <Button>
        <Icon name="ellipsis-horizontal-sharp" size={30} color="#ffffff" />
      </Button>
    </Container>
  );
}

export default TopBar;
