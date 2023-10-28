import React from "react";
import { Box, Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

const cardStyle = {
  position: "relative",
  maxWidth: "300px",
  matgin: "0 10px",
};

const textStyle = {
  position: "absolute",
  bottom: 10,
  left: 50,
  padding: "8px",
  color: "beige",
  fontSize: "16px",
  fontWeight: "bold",
  fontFamily: "Century Gothic, sans-serif",
  textShadow: "10px 10px 10px rgba(100, 50, 20, 0.5)",
  width: "60%", // Take up the full width of the container
  borderRadius: "0 0 10px 10px", // Rounded corners only at the bottom // Adjust the shadow values as needed
};


function LocationCard({ location }) {
  return (
    <LinkBox>
      <LinkOverlay href={`/location/${location._id}`}>
        <Box style={cardStyle} position="relative" mb={4}>
          <Image
            borderRadius="10px"
            boxSize="200px"
            src={location.image}
            alt={location.city}
            mb={4}
          />

          <Text style={textStyle}>{location.city}</Text>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
}

export default LocationCard;
