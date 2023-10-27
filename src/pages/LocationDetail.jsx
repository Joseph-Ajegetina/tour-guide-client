"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import activitiesService from "../services/activity.service";
import useToastMessage from "../utils/useToastMessage";
import locationsService from "../services/location.service";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import CategoryContent from "../components/Categories/CategoryContent";
import ActivityCard from "../components/activity/ActivityCard";



function LocationDetailPage() {
  const { locationId } = useParams();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [activities, setActivities] = useState(null);

  const { showToast } = useToastMessage();
  const bg = useColorModeValue(
    "radial(orange.600 1px, transparent 1px)",
    "radial(orange.300 1px, transparent 1px)"
  );
  const dividerBg = useColorModeValue("gray.200", "gray.600");
  const descriptionBg = useColorModeValue("gray.500", "gray.400");

  useEffect(() => {
    getLocationDetail();
    getLocationActivities();
  }, [locationId]);

  const getLocationDetail = async () => {
    try {
      setLoading(true);
      const res = await locationsService.getLocation(locationId);
      setLocation(res.data);
    } catch (err) {
      showToast("", "Something went wrong gettting the location", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getLocationActivities = async () => {
    try {
      setLoading(true);
      const res = await activitiesService.getLocationActivity(locationId);
      setActivities(res.data);
    } catch (err) {
      showToast(
        "",
        "Something went wrong gettting the activities for location",
        "error"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return !loading && location ? (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={location.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {location.city} - {location.country}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={dividerBg} />}
          >
            <Stack spacing={{ base: 4, sm: 6 }}>
              <Heading
                color={descriptionBg}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                About this place
              </Heading>
              <Text fontSize={"lg"}>{location.description}</Text>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
      <HStack>
        {activities && activities.map(activity => {
          return <ActivityCard key={activity._id} activity={activity}/>
        })}
      </HStack>
    </Container>
  ) : (
    <LoadingSpinner />
  );
}

export default LocationDetailPage;
