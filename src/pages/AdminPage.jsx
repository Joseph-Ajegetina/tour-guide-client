import React from "react";
import LocationTable from "../components/location/LocationTable";
import ActivityTable from "../components/activity/ActivityTable";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  TabIndicator,
} from "@chakra-ui/react";

function AdminPage() {
  return (
    <Box mt={20}>
      <Tabs position="relative" variant="unstyled" align="center">
        <TabList mb="1em">
          <Tab>Locations</Tab>
          <Tab>Activities</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <LocationTable />
          </TabPanel>
          <TabPanel>
            <ActivityTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default AdminPage;
