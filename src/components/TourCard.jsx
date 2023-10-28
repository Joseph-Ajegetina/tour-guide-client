import React, { useState } from "react";
import { Box, Image, Badge, LinkBox, LinkOverlay } from "@chakra-ui/react";

function TourCard({ activity }) {
  return (
    activity && (
      <LinkBox>
        <LinkOverlay href={`/activity/${activity._id}`}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            {<Image h={'3xs'} w={'full'} src={activity.images[0]} alt={activity.title} />}

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                ></Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {activity.title}
              </Box>
              <Box>${activity.price}</Box>
            </Box>
          </Box>
        </LinkOverlay>
      </LinkBox>
    )
  );
}

export default TourCard;
