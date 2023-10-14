import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LocationTable from "../components/location/LocationTable";
import ActivityTable from "../components/activity/ActivityTable";

function AdminPage() {
  return (
    <div className="container py-4">
      <Tabs
        defaultActiveKey="locations"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="locations" title="Locations">
          <LocationTable/>
        </Tab>
        <Tab eventKey="activities" title="Activities">
          <ActivityTable/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default AdminPage;
