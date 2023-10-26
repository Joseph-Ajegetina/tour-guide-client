import React from "react";
import { SimpleGrid, Box, Image, Stack, Heading, Text } from "@chakra-ui/react";

function MusicPage() {
  return (
    <SimpleGrid spacing={4} columns={3}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg">
        <Image
          src="https://discoverbritainmag.telegraph.co.uk/wp-content/uploads/2019/08/PXRA9H.jpg"
          alt="Image Alt Text 1"
          borderRadius="lg"
        />
        <Box p="6">
          <Stack spacing="3">
            <Heading size="md">Liverpool, England</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces, and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </Box>
      </Box>

      <Box maxW="sm" borderWidth="1px" borderRadius="lg">
        <Image
          src="https://www.xperiencedays.com/images/New-Orleans-Jazz-Tours-XD-1768-011.jpg"
          alt="Image Alt Text 2"
          borderRadius="lg"
        />
        <Box p="6">
          <Stack spacing="3">
            <Heading size="md">New Orleans, USA</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces, and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </Box>
      </Box>

      <Box maxW="sm" borderWidth="1px" borderRadius="lg">
        <Image
          src="https://cdn.getyourguide.com/img/tour/5dea2e9af09fc.jpeg/145.jpg"
          alt="Image Alt Text 3"
          borderRadius="lg"
        />
        <Box p="6">
          <Stack spacing="3">
            <Heading size="md">Vienna, Austria</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces, and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </Box>
      </Box>
    </SimpleGrid>
  );
}

export default MusicPage;
