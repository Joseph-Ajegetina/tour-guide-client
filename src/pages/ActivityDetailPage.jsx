"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  useToast,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import activitiesService from "../services/activity.service";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import userService from "../services/user.service";
import { AuthContext } from "../context/auth.context";
import useToastMessage from "../utils/useToastMessage";

function ActivityDetailPage() {
  const { activityId } = useParams();
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const priceBg = useColorModeValue("gray.900", "gray.400");
  const featureBg = useColorModeValue("yellow.500", "yellow.300");
  const dividerBg = useColorModeValue("gray.200", "gray.600");
  const descriptionBg = useColorModeValue("gray.500", "gray.400");
  const btnBg = useColorModeValue("gray.900", "gray.50");
  const btnColor = useColorModeValue("white", "gray.900");
  const wishBtnBg = useColorModeValue("green.900", "green.500");

  const { showToast } = useToastMessage();

  useEffect(() => {
    getActivityDetail();
  }, [activityId]);

  const getActivityDetail = async () => {
    try {
      setLoading(true);
      const res = await activitiesService.getActivity(activityId);
      setActivity(res.data);
    } catch (err) {
      showToast("", "Something went wrong gettting the activity", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const bookActivity = () => {
    navigate(`/${activityId}/payment`);
  };

  const addToWishList = async () => {
    try {
      setSubmitting(true);
      await userService.addActivityToWishlist(user._id, activityId);
      showToast(
        "Wishlist",
        `${activity.title} successfully added to your addToWishList.`,
        "success"
      );
      navigate("/");
    } catch (err) {
      showToast("", "Something went wrong booking the activity", "error");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
  return !loading && activity ? (
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
            src={activity.images[0]}
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
              {activity.title}
            </Heading>
            <Text color={priceBg} fontWeight={300} fontSize={"2xl"}>
              ${activity.price} USD
            </Text>
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
                About the Activity
              </Heading>
              <Text fontSize={"lg"}>{activity.description}</Text>
            </Stack>
            {activity.inclusions.length > 0 && (
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={featureBg}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Packages
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    {activity.inclusions.map((includes) => {
                      return <ListItem key={includes}>{includes}</ListItem>;
                    })}
                  </List>
                </SimpleGrid>
              </Box>
            )}
            {activity.requirements.length > 0 && (
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={featureBg}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Requirements
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    {activity.requirements.map((requires) => {
                      return <ListItem key={requires}>{requires}</ListItem>;
                    })}
                  </List>
                </SimpleGrid>
              </Box>
            )}
          </Stack>

          <Button
            onClick={bookActivity}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={btnBg}
            color={btnColor}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Book Now
          </Button>

          <Button
            onClick={addToWishList}
            rounded={"none"}
            w={"full"}
            mt={1}
            size={"lg"}
            py={"7"}
            isLoading={submitting}
            bg={wishBtnBg}
            color={btnColor}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to Wishlist
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  ) : (
    <LoadingSpinner />
  );
}

export default ActivityDetailPage;
