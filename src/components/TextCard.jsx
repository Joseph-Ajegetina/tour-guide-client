import React, { useState } from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Grid, GridItem } from "@chakra-ui/react";


function TextCard() {


  return (
  
<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Thrill Attractions worldwide</Tab>
    <Tab>Thrill destinations worldwide</Tab>
    <Tab>Top countries worldwide</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={-1} bg='tomato'>
              <Box color='white' fontSize='lg'>
                Attraction 1
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='papayawhip'>
              <Box color='black' fontSize='lg' >
                Attraction 2
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='tomato'>
              <Box color='white' fontSize='lg'>
                Attraction 1
              </Box>
            </GridItem>
            <GridItem  colSpan={4} bg='papayawhip'>
              <Box color='black' fontSize='lg' >
                Attraction 3
              </Box>
            </GridItem>
           
          </Grid>  
            </TabPanel>
    <TabPanel>
    <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={-1} bg='tomato'>
              <Box color='white' fontSize='lg' fontFamily='Sawarabi Gothic'>
                Attraction 1
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='papayawhip'>
              <Box color='black' fontSize='lg' fontFamily='Sawarabi Gothic'>
                Attraction 2
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='tomato'>
              <Box color='white' fontSize='lg' fontFamily=' Gothic A1'>
                Attraction 1
              </Box>
            </GridItem>
            <GridItem  colSpan={4} bg='papayawhip'>
              <Box color='black' fontSize='lg' fontFamily=' Gothic A1'>
                Attraction 3
              </Box>
            </GridItem>
           
          </Grid>  
    </TabPanel>
    <TabPanel>
    <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={-1} bg='tomato'>
              <Box color='white' fontSize='lg'>
                Attraction 1
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='papayawhip'>
              <Box color='black' fontSize='lg' >
                Attraction 2
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='tomato'>
              <Box color='white' fontSize='lg'>
                Attraction 1
              </Box>
            </GridItem>
            <GridItem  colSpan={4} bg='papayawhip'>
              <Box color='black' fontSize='lg' fontFamily='Open Sans'>
                Attraction 3
              </Box>
            </GridItem>
           
          </Grid>      </TabPanel>
  </TabPanels>
</Tabs>
  
  );
}
export default TextCard;


// import React from "react";
// import { Box, Grid, GridItem } from "@chakra-ui/react";

// function AttractionBox({ name, tours }) {
//   return (
//     <GridItem
//       colSpan={3} // Set the number of columns to control the spacing between boxes
//     >
//       <Box
//         backgroundColor="black"
//         borderRadius="20px"
//         padding="1rem"
//         fontFamily="Century Gothic, sans-serif"
//         lineHeight="1.5"
//         marginTop="-2rem"
//         marginLeft="-4"
//         w="200px"
//         h="50px"
//       >
//         <p style={{ color: "#333", marginBottom: "4px" }}>{name}</p>
//         <p style={{ color: "#777", marginTop: "5px" }}>{`${tours} available tours now`}</p>
//       </Box>
//     </GridItem>
//   );
// }

// function YourComponent() {
//   // An array with data for 40 boxes (e.g., name and tours)
//   const attractionData = [
//     { name: "Attraction 1", tours: 820 },
//     { name: "Attraction 2", tours: 650 },
//     // ... Add data for the remaining 38 attractions
//   ];

//   return (
//     <Grid
//       templateColumns="repeat(4, 1fr)" // Adjust the number of columns as needed
//       gap={4} // Set the gap between grid items
//     >
//       {attractionData.map((attraction, index) => (
//         <AttractionBox key={index} name={attraction.name} tours={attraction.tours} />
//       ))}
//     </Grid>
//   );
// }

// export default YourComponent;
