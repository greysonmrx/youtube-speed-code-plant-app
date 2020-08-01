import React from "react";

import { Container, Star } from "./styles";

function Rating() {
  return (
    <Container>
      <Star name="star" size={12} color="#FFB32A" />
      <Star name="star" size={12} color="#FFB32A" />
      <Star name="star" size={12} color="#FFB32A" />
      <Star name="star" size={12} color="#FFB32A" />
      <Star name="star" size={12} color="#FFB32A" />
    </Container>
  );
}

export default Rating;
