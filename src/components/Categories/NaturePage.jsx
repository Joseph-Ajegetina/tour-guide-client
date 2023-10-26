import React from 'react';
import { SimpleGrid, Box, Image, Stack, Heading, Text } from '@chakra-ui/react';



function NaturePage() {
    return (<SimpleGrid spacing={4} columns={3}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          <Image
            src="https://familyhotelfinder.com/wp-content/uploads/Iguazu-Falls4-SH.jpg"
            alt="Image Alt Text 1"
            borderRadius="lg"
          />
          <Box p="6">
            <Stack spacing="3">
              <Heading size="md">Falls do Iguazu, Brazil/Argentina</Heading>
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
            src="https://www.weseektravel.com/wp-content/uploads/2022/08/cappadocia-balloon-ride-turkey-1.jpg"
            alt="Image Alt Text 2"
            borderRadius="lg"
          />
          <Box p="6">
            <Stack spacing="3">
              <Heading size="md">Cappadocia, Turkey</Heading>
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
            src="https://www.muchbetteradventures.com/magazine/content/images/2019/07/12102929/iStock-992710110.jpg"
            alt="Image Alt Text 3"
            borderRadius="lg"
          />
          <Box p="6">
            <Stack spacing="3">
              <Heading size="md">Northern Lights, Norway</Heading>
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

  export default NaturePage;
