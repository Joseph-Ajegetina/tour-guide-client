import React from "react";
import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import TourCard from "../components/TourCard"; // Adjust the relative path as needed
import ImageCard from "../components/ImageCard";
import TextCard from "../components/TextCard";
import { useState, useEffect } from "react";
import activitiesService from "../services/activity.service";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import useToastMessage from "../utils/useToastMessage";
import locationsService from "../services/location.service";
import CategoryContent from "../components/Categories/CategoryContent";

function HomePage() {
  const [activities, setActivities] = useState([]);
  const [activiesByCategories, setActivitiesByCategories] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Culture");
  const [categories, setCategories] = useState();

  const onTabChange = (category) => {
    setSelectedCategory(category);
  };

  const [loading, setLoading] = useState(false);
  const { showToast } = useToastMessage();

  useEffect(() => {
    getAllActivities();
    getAllLocations();
  }, []);

  const filterActivities = (data) => {
    const activitiesByCategory = data.reduce((acc, activity) => {
      const { category } = activity;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(activity);
      return acc;
    }, {});

    setActivitiesByCategories(activitiesByCategory);
    const categoryNames = Object.keys(activitiesByCategory);
    setCategories(categoryNames);
  };

  const getAllActivities = async () => {
    setLoading(true);
    try {
      const res = await activitiesService.getAllActivities();
      const data = res.data;
      setActivities(data);
      filterActivities(data);
    } catch (err) {
      console.error(err);
      showToast("Error ", "Something went wrong getting activities", "error");
    } finally {
      setLoading(false);
    }
  };

  const getAllLocations = async () => {
    setLoading(true);
    try {
      const res = await locationsService.getAllLocations();
      console.log("all locations ", res);
      setLocations(res.data);
    } catch (err) {
      console.error(err);
      showToast("Error ", "Something went wrong getting locations", "error");
    } finally {
      setLoading(false);
    }
  };

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

  return !loading ? (
    <Container maxW="1400px">
      {/* Wrap entire content in Chakra Container */}
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
          <Text fontSize="lg">Check out our Collections</Text>
        </Box>

        <Tabs isFitted variant="enclosed" isLazy>
          <TabList mb="1em">
            {categories &&
              categories.map((category) => (
                <Tab
                  key={category}
                  onClick={() => onTabChange(category)}
                  isSelected={selectedCategory === category}
                >
                  {category}
                </Tab>
              ))}
          </TabList>
          <TabPanels>
            {activiesByCategories &&
              categories &&
              categories.map((category) => (
                <TabPanel key={category}>
                  <CategoryContent
                    activities={activiesByCategories[category]}
                  />
                </TabPanel>
              ))}
          </TabPanels>
        </Tabs>
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
  ) : (
    <LoadingSpinner />
  );
}

export default HomePage;
