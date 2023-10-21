import React from 'react';
import { Tabs, TabList, Tab, Box } from '@chakra-ui/react';

function HomePage() {
  return (
    <Box>
      <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList>
            <Tab
              py={4}
              m={0}
              _focus={{
                boxShadow: "none",
              }}
            >
              Basic
            </Tab>
            <Tab
              py={4}
              m={0}
              _focus={{
                boxShadow: "none",
              }}
            >
              Integrations
            </Tab>
          </TabList>
        </Tabs>
    </Box>
  );
}

export default HomePage;
