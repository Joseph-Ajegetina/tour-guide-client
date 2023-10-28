import React, { useState } from "react";
import { Image, Flex, Text, IconButton, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";


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
  background: "rgba(0, 0, 0, 0.2)", // Semi-transparent background
  borderRadius: "0 0 10px 10px", // Rounded corners only at the bottom // Adjust the shadow values as needed
};

const gradientOverlay = {
  position: "absolute",
  bottom: 35,
  left: 0,
  width: "70%",
  height: "10%", // Adjust the height for the desired shading area
  background: "linear-gradient(to bottom, rgba(100,0,0,0), rgba(10,0,50,0.7))", // Adjust the gradient color and opacity
};

//Added code now

const cardData = [
  {
    name: "New York City",
    image:
      "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-new-york-city.jpg",
  },
  {
    name: "Amsterdam",
    image:
      "https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtc3RlcmRhbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Paris",
    image:
      "https://s1.picswalls.com/thumbs2/2014/07/28/paris-high-definition_121320658_125.jpg",
  },
  {
    name: "Sydney",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5fGVufDB8fDB8fHww",
  },
  {
    name: "Mexico City",
    image:
      "https://media.gettyimages.com/id/552812595/de/foto/el-angel-de-independencia-mexican-landmark.jpg?s=612x612&w=0&k=20&c=O_KyKTgERGj2dy3PxDgGPpuabZKP6Fj4du7f_udMyNA=",
  },
  {
    name: "Phuket",
    image:
      "https://media.istockphoto.com/id/1299735828/photo/travel-photo-of-james-bond-island-with-thai-traditional-wooden-longtail-boat-and-beautiful.webp?b=1&s=170667a&w=0&k=20&c=AArdXIllQMrPm7GL3X7E4VD3VCtg_qsxh2MTULL2rwk=",
  },
  // Add more cities as needed
];

function ImageCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cardData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : cardData.length - 1
    );
  };

  return (
    <Flex justify="space-between">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={showPrevious}
        size="lg"
        colorScheme="blue"
        isRound
        transform="translate(0, 150%)"
        // Add any additional styling you need
      />
      {cardData.map((card, index) => {
        if (index >= currentIndex && index < currentIndex + 5) {
          return (
            (
              <Box key={index} style={cardStyle} position="relative" mb={4}>
              <Image
                  borderRadius="10px"
                  boxSize="200px"
                  src={card.image}
                  alt={card.name}
                  mb={4}
                />

                <Text style={textStyle}>{card.name}</Text>
              </Box>
            ),
            (
              <Box key={index} style={cardStyle} position="relative" mb={4}>
              <Image
                  borderRadius="10px"
                  boxSize="200px"
                  src={card.image}
                  alt={card.name}
                  mb={4}
                />
                <Text style={textStyle}>{card.name}</Text>
              </Box>
            ),
            (
              <Box key={index} style={cardStyle} position="relative" mb={4}>
              <Image
                  borderRadius="10px"
                  boxSize="200px"
                  src={card.image}
                  alt={card.name}
                  mb={4}
                />
                <Text style={textStyle}>{card.name}</Text>
              </Box>
            ),
            (
              <Box key={index} style={cardStyle} position="relative" mb={4}>
              <Image
                  borderRadius="10px"
                  boxSize="200px"
                  src={card.image}
                  alt={card.name}
                  mb={4}
                />
                  <Text style={textStyle} position="absolute" bottom="10px" left="15px">{card.name}</Text>
              </Box>
            )
          );
        }
        return null;
      })}

      <IconButton
        icon={<ChevronRightIcon />}
        onClick={showNext}
        size="lg"
        colorScheme="blue"
        isRound
        right="20px" // Move to the right (adjust the value)
        transform="translate(0, 10%)"
      />
    </Flex>
  );
}

export default ImageCard;

