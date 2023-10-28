import React, { useState } from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Grid, GridItem } from "@chakra-ui/react";


function TextCard() {


  return (
  
<Tabs variant='soft-rounded' colorScheme='orange'>
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
            
            <GridItem rowSpan={2} colSpan={-1} bg='papayawhip'>
              <Box color='#b64f26' fontSize='lg' borderRadius='lg' p={4}>
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
              <strong>Vatican Museums, Rome</strong>
            <br />
            <br />  
            St Peter's Basilica
            <br />
            Vatican Hall
            <br />
            Sistine Chapel        
              </p>
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='#b64f26'>
              <Box color='papayawhip' fontSize='lg' borderRadius='4' >
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
              <strong>Reichstag, Berlin</strong>

            <br />
            <br />  
            Government district
                <br />
            Plenary Chamber       
       </p>  
                   </Box>
            </GridItem>
            <GridItem colSpan={2} bg='papayawhip'>
              <Box color='#b64f26' fontSize='lg'>
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
              <strong> Alhambra, Granada</strong>
           
            <br />
            <br />  
            Nasrid Palaces  
                <br />
            Alcazaba access
       </p>             
          </Box>
            </GridItem>
            <GridItem  colSpan={4} bg='#b64f26'>
              <Box color='papayawhip' fontSize='lg' >
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
             <strong>Pompeii Archaelogical Site, Campania</strong> 
            <br />
                     
              Herculaneum 
                <br />
           
       </p>                     </Box>
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
            <GridItem rowSpan={2} colSpan={-1} bg='#b64f26'>
            <Box color='papayawhip' fontSize='lg' >
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
             <strong>Krakow, Poland</strong> 
            <br />
            <br />  
            Aushwitz museums
            <br />
            Birkenau
            <br />
            Wieliczka Salt Mine
            <br />
            Oskar Schindler's Factory        
              </p>              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='papayawhip'>
              <Box color='#b64f26' fontSize='lg' >
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
             <strong>Florence, Italy</strong> 
            <br />
            <br />  
             Chianti Wineries&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uffizi Gallery
            <br />
            
             
              </p>     
              </Box>
            </GridItem>
            <GridItem colSpan={2} bg='#b64f26'>
              <Box color='papayawhip' fontSize='lg' >
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
             <strong>Medellín, Colombia</strong> 
            <br />
            <br />  
              Guatape, El Peñol&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comuna 13 History & Graffiti
                          <br />
            
             
              </p>                   
              </Box>
            </GridItem>
            <GridItem  colSpan={4} bg='papayawhip'>
              <Box color='#b64f26' fontSize='lg' >
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
             <strong>Reykjavik, Iceland</strong> 
            <br />
            <br />  
            Northern Lights&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Blue Lagoon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Golden Circle &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kerid Crater
           
            <br />
            

              </p>                   </Box>
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
            <GridItem rowSpan={2} colSpan={-1} bg='papayawhip'>
              <Box color='#b64f26' fontSize='lg'>
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
              <strong>Europe</strong>
            <br />
            <br />  
            Italy           
            <br />
            Spain
            <br />
            France  
            <br />
            Germany    
            <br />
            Greece  
              </p>        
 </Box>
            </GridItem>
            <GridItem rowSpan={1}  colSpan={2} bg='#b64f26'>
              <Box color='papayawhip' fontSize='lg' >
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
              <strong>Asia</strong>
              <br />
          Vietnam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Indonesia  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Laos   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cambodia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Singapore
            <br />  
            China           
            
              </p>      
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2} bg='#b64f26'>
              <Box color='papayawhip' fontSize='lg'>
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
              <strong>Africa</strong>
              <br />  
        Morocco&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Algeria&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Egypt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tunisia

            <br />  
            South Africa           
            <br />
            Kenya 
              </p>                 </Box>
            </GridItem>
            <GridItem  colSpan={4} bg='papayawhip'>
              <Box color='#b64f26' fontSize='lg' >
              <p style={{ margin: '10px',fontWeight: 'bold', lineHeight: '1.5'  }}>
              <strong>Americas</strong>
              <br />
              Colombia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brazil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Argentine&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Peru&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ecuador&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Panama

            <br />  
            USA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puerto Rico &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mexico &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuba &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
              </p>   
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
