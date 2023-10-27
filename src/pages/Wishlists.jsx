import React, { useContext, useEffect, useState } from "react";
import { Stack, Container, Box, Flex, Text, Heading } from "@chakra-ui/react";
import { AuthContext } from "../context/auth.context";
import userService from "../services/user.service";
import useToastMessage from "../utils/useToastMessage";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import ActivityCard from "../components/activity/ActivityCard";

function Wishlists() {
  const [activities, setActivities] = useState(null);
  const { user } = useContext(AuthContext);
  const { showToast } = useToastMessage();
  const [isLoading, setIsLoading] = useState(false);

  const getUserWishlist = async () => {
    try {
      setIsLoading(true);
      const res = await userService.getWishlists(user._id);
      setActivities(res.data);
    } catch (error) {
      console.error(error);
      showToast(
        "Oops",
        "Something went wrong trying to fetch booksings",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserWishlist();
  }, []);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          {" "}
          <Box p={4}>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
              <Heading
                fontSize={{ base: "2xl", sm: "4xl" }}
                fontWeight={"bold"}
              >
                Wishlist
              </Heading>
              <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
                Here you can see all the acitivities that you added to your
                wishlists. These are sometimes activities you would love to try
                in the future.
              </Text>
            </Stack>

            <Container maxW={"5xl"} mt={12}>
              <Flex flexWrap="wrap" gridGap={6} justify="center">
                {activities &&
                  activities.map((activity) => (
                    <ActivityCard key={activity._id} activity={activity} />
                  ))}
              </Flex>
            </Container>
          </Box>
        </>
      )}
    </>
  );
}

export default Wishlists;
