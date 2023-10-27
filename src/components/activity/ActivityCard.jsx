import React from "react";
import { Image, Flex, Text, Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
function ActivityCard({ activity }) {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="sm"
      alignItems="center"
      justifyContent="center"
    >
      {activity && (
        <Box
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
        >
          <LinkBox>
            <LinkOverlay href={`/activity/${activity._id}`}>
              <Image
                src={activity.images[0]}
                alt={activity.title}
                roundedTop="lg"
              />

              <Box p="6">
                <Text
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {activity.title}
                </Text>

                <Box>${activity.price}</Box>
              </Box>
            </LinkOverlay>
          </LinkBox>
        </Box>
      )}
    </Flex>
  );
}

export default ActivityCard;
