import React from 'react';
import { SimpleGrid, Box, Image, Stack, Heading, Text } from '@chakra-ui/react';


function CulturePage() {
    return (
        <SimpleGrid spacing={4} columns={3}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg">
            <Image
              src="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg"
              alt="Image Alt Text 1"
              borderRadius="lg"
            />
            <Box p="6">
              <Stack spacing="3">
                <Heading size="md">Taj Mahal, India</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces, and for people who love
                  a chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg">
            <Image
              src="https://cdn.pixabay.com/photo/2021/05/29/18/59/petra-6294051_1280.jpg"
              alt="Image Alt Text 2"
              borderRadius="lg"
            />
            <Box p="6">
              <Stack spacing="3">
                <Heading size="md">Petra, Jordan</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces, and for people who love
                  a chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg">
            <Image
              src="https://cdn.getyourguide.com/img/tour/5c8a5f89925aa.jpeg/145.jpg"
              alt="Image Alt Text 3"
              borderRadius="lg"
            />
            <Box p="6">
              <Stack spacing="3">
                <Heading size="md">Acropolis, Athens</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces, and for people who love
                  a chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </Box>
          </Box>
        </SimpleGrid>
      )
    }

    export default CulturePage;
