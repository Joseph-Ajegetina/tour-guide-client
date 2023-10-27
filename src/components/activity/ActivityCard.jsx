import React from "react";
import {
  Image,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Stack,
  Heading,
} from "@chakra-ui/react";
function ActivityCard({ activity }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg">
      <LinkBox>
        <LinkOverlay href={`/activity/${activity._id}`}>
          <Image
            src={activity.images[0]}
            alt="Image Alt Text 1"
            borderRadius="lg"
          />
          <Box p="6">
            <Stack spacing="3">
              <Heading size="md">{activity.title}</Heading>
              <Text isTruncated>{activity.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${activity.price}
              </Text>
            </Stack>
          </Box>
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
}

export default ActivityCard;
