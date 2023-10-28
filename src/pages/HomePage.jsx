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
import LocationsSection from "../components/LocationsSection";
import TextCard from "../components/TextCard";
import { useState, useEffect } from "react";
import activitiesService from "../services/activity.service";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import useToastMessage from "../utils/useToastMessage";
import CategoryContent from "../components/Categories/CategoryContent";
import CaptionCarousel from "../components/CaptionCarousel";

function HomePage() {
  const [activities, setActivities] = useState([]);
  const [activiesByCategories, setActivitiesByCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Culture");
  const [noCategoryActivities, setNoCategoryActivities] = useState();
  const [categories, setCategories] = useState();

  const onTabChange = (category) => {
    setSelectedCategory(category);
  };

  const [loading, setLoading] = useState(false);
  const { showToast } = useToastMessage();

  useEffect(() => {
    getAllActivities();
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

  const getNoCategoryActivities = (data) => {
    const activities = data.filter((activity) => !activity.category);
    setNoCategoryActivities(activities);
  };

  const getAllActivities = async () => {
    setLoading(true);
    try {
      const res = await activitiesService.getAllActivities();
      const data = res.data;
      setActivities(data);
      filterActivities(data);
      getNoCategoryActivities(data);
    } catch (err) {
      console.error(err);
      showToast("Error ", "Something went wrong getting activities", "error");
    } finally {
      setLoading(false);
    }
  };

  return !loading ? (
    <Container maxW="1400px">
      {/* Wrap entire content in Chakra Container */}
      <div>
        <CaptionCarousel />
      </div>
      <div className="mt-4 p-4">
        <Box p={4}>
          <Heading as="h2" size="lg" mb={4} color="#5c3915">
            Immerse in Unforgettable Experiences
          </Heading>
          <Divider my={6} borderBottom="2px" borderColor="#e35b2f" />
        </Box>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2}>
          {noCategoryActivities &&
            noCategoryActivities.map((activity, index) => (
              <TourCard activity={activity} />
            ))}
        </SimpleGrid>


        <Box p={4}>
          <div className="card-divider"></div>
          <Heading as="h2" size="lg" mb={4} color="#5c3915">
            Collections
          </Heading>
          <Text fontSize="lg" color="#e35b2f">
            Check out our newest Collections
          </Text>
          <Divider my={6} borderBottom="2px" borderColor="#e35b2f" />
        </Box>

        <Tabs isFitted variant="enclosed" isLazy>
          <TabList mb="1em">
            {categories &&
              categories.map((category) => (
                <Tab key={category} onClick={() => onTabChange(category)}>
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
          <Heading as="h2" size="lg" mb={4} color="#5c3915">
            Thrilling cities around the world
          </Heading>

          <Text fontSize="lg" color="#e35b2f">
            Explore more activities and tours in city collection.
          </Text>
          <Divider my={6} borderBottom="2px" borderColor="#e35b2f" />
        </Box>

        {/* Display ImageCard component below the Collections */}
        <LocationsSection />

        <Box p={4}>
          <div className="card-divider"></div>
          <Heading as="h2" size="lg" mb={4} color="#5c3915">
            Discover culture around the world
          </Heading>
          <Divider my={6} borderBottom="2px" borderColor="#e35b2f" />
        </Box>

        <TextCard />
      </div>
    </Container>
  ) : (
    <LoadingSpinner />
  );
}

export default HomePage;
