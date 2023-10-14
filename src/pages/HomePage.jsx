import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function HomePage() {
  return (
    <div className='mt-4 p-4'>
      HomePage
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Content for tab one</p>
          </TabPanel>
          <TabPanel>
            <p>Content for tab two</p>
          </TabPanel>
          <TabPanel>
            <p>Content for tab three</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default HomePage;
