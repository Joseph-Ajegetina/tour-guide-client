import React from "react";
import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Divider,
  ButtonGroup,
  Center,
  VStack,
} from "@chakra-ui/react";
import TourCard from "../components/TourCard"; // Adjust the relative path as needed
import CulturePage from "../components/Categories/CulturePage";
import FoodPage from "../components/Categories/FoodPage";
import MusicPage from "../components/Categories/MusicPage";
import NaturePage from "../components/Categories/NaturePage";
import ImageCard from "../components/ImageCard"
import TextCard from "../components/TextCard"



function DataTabs({ data }) {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        {data.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((tab, index) => (
          <TabPanel p={4} key={index}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

function HomePage() {
  const tabData = [
    {
      label: "Culture",
      content: <CulturePage />,
    },
    {
      label: "Nature",
      content: <NaturePage />,
    },

    {
      label: "Food",
      content: <FoodPage />,
    },
    {
      label: "Music",
      content: <MusicPage />,
    },
  ];

  const cardData = [
    {
      title: "Card 1",
      content: "Content for Card 1",
    },
    {
      title: "Card 2",
      content: "Content for Card 2",
    },
    {
      title: "Card 3",
      content: "Content for Card 3",
    },
    {
      title: "Card 3",
      content: "Content for Card 3",
    },
  ];

  return (
    <Container maxW="1400px"> {/* Wrap entire content in Chakra Container */}

    <div className="mt-4 p-4">
      <Box p={4}>
        <Heading as="h2" size="lg" mb={4}>
          Unforgettable Experiences
        </Heading>
        <Divider my={6} />

      </Box>

      <Divider my={6} />
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2}>
        {cardData.map((card, index) => (
          <TourCard key={index} title={card.title} content={card.content} />
        ))}
      </SimpleGrid>

      <Divider my={6} />
      <Box p={4}>
      <div className="card-divider"></div>
        <Heading as="h2" size="lg" mb={4}>
          Collections
        </Heading>
        <Divider my={6} />
        <Text fontSize="lg">
          Check out our Collections
        </Text>
      </Box>

  

      {/* DataTabs displayed below the TourCard */}
      <DataTabs data={tabData} />

      <Box p={4}>
      <div className="card-divider"></div>
        <Heading as="h2" size="lg" mb={4}>
          Thrilling cities around the world
        </Heading>
        <Divider my={6} />

        <Text fontSize="lg">
          Explore more activities and tours in our collections.
        </Text>
      </Box>

       {/* Display ImageCard component below the Collections */}
       <ImageCard />

       
      <Box p={4}>
      <div className="card-divider"></div>
        <Heading as="h2" size="lg" mb={4}>
Explore culture around the world   
   </Heading>
        <Divider my={6} />

        
      </Box>
       
       <TextCard />

    </div>
    </Container>
  );
}

export default HomePage;
