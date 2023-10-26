import React from 'react';
import { SimpleGrid, Box, Image, Stack, Heading, Text } from '@chakra-ui/react';


function FoodPage() {
    return (<SimpleGrid spacing={4} columns={3}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Image
            src="https://www.anadventurousworld.com/wp-content/uploads/2019/02/food-tours-in-bangkok.jpg"
            alt="Image Alt Text 1"
            borderRadius="lg"
          />
          <Box p="6">
            <Stack spacing="3">
              <Heading size="md">Bangkok, Thailand</Heading>
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
            src="https://live.staticflickr.com/7813/47444613491_f0fc9a239c_b.jpg"
            alt="Image Alt Text 2"
            borderRadius="lg"
          />
          <Box p="6">
            <Stack spacing="3">
              <Heading size="md">Aswan, Egypt</Heading>
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
            src="https://eataliancooks.com/wp-content/uploads/2022/04/29.png"
            alt="Image Alt Text 3"
            borderRadius="lg"
          />
          <Box p="6">
            <Stack spacing="3">
              <Heading size="md">Rome, Italy</Heading>
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
       export default FoodPage;
