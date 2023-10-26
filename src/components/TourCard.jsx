import React, { useState } from 'react';
import { Box, Image, Stack, Heading, Text, Badge, Flex, IconButton } from '@chakra-ui/react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


function TourCard() {
  const properties = [
    {
      imageUrl: 'https://images.robertharding.com/zoom/RM/RH/HORIZONTAL/698-3190.jpg',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Barcelona: Entry Ticket to Sagrada Familia',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    },
    // Add more property objects with different details and images
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex - 4 : properties.length - 4));
  };
  
  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < properties.length - 4 ? prevIndex + 4 : 0));
  };
  

  const property = properties[currentIndex];

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={properties[currentIndex].imageUrl} alt={properties[currentIndex].imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {properties[currentIndex].beds} beds &bull; {properties[currentIndex].baths} baths
          </Box>
        </Box>

        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
        {properties[currentIndex].title}
        </Box>

        <Box>
        {properties[currentIndex].formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < properties[currentIndex].rating ? 'teal.500' : 'gray.300'} />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {properties[currentIndex].reviewCount} reviews
          </Box>
        </Box>
      </Box>

      <Flex justify='space-between' mt='2'>
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={showPrevious}
          size='md'
          colorScheme='blue'
          isRound
        />
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={showNext}
          size='md'
          colorScheme='blue'
          isRound
        />
      </Flex>
    </Box>
  );
}

export default TourCard;





// import React from "react";
// import { Box, Image, Stack, Heading, Text, Badge } from '@chakra-ui/react';
// import { StarIcon } from '@chakra-ui/icons'; // Import StarIcon


// function TourCard() {
//     const property = {
//       imageUrl: 'https://images.robertharding.com/zoom/RM/RH/HORIZONTAL/698-3190.jpg',
//       imageAlt: 'Rear view of modern home with pool',
//       beds: 3,
//       baths: 2,
//       title: 'Barcelona: Entry Ticket to Sagrada Familia',
//       formattedPrice: '$1,900.00',
//       reviewCount: 34,
//       rating: 4,
//     }
  
//     return (
//       <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
//         <Image src={property.imageUrl} alt={property.imageAlt} />
  
//         <Box p='6'>
//           <Box display='flex' alignItems='baseline'>
//             <Badge borderRadius='full' px='2' colorScheme='teal'>
//               New
//             </Badge>
//             <Box
//               color='gray.500'
//               fontWeight='semibold'
//               letterSpacing='wide'
//               fontSize='xs'
//               textTransform='uppercase'
//               ml='2'
//             >
//               {property.beds} beds &bull; {property.baths} baths
//             </Box>
//           </Box>
  
//           <Box
//             mt='1'
//             fontWeight='semibold'
//             as='h4'
//             lineHeight='tight'
//             noOfLines={1}
//           >
//             {property.title}
//           </Box>
  
//           <Box>
//             {property.formattedPrice}
//             <Box as='span' color='gray.600' fontSize='sm'>
//               / wk
//             </Box>
//           </Box>
  
//           <Box display='flex' mt='2' alignItems='center'>
//             {Array(5)
//               .fill('')
//               .map((_, i) => (
//                 <StarIcon
//                   key={i}
//                   color={i < property.rating ? 'teal.500' : 'gray.300'}
//                 />
//               ))}
//             <Box as='span' ml='2' color='gray.600' fontSize='sm'>
//               {property.reviewCount} reviews
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     )
//   }


//   export default TourCard;
