import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ActivityCard from "../activity/ActivityCard";

function CategoryContent({ activities }) {
  console.log("activies in content ", activities);
  return (
    <SimpleGrid spacing={4} columns={3}>
      {activities &&
        activities.map((activity) => {
          return <ActivityCard activity={activity} key={activity._id} />;
        })}
    </SimpleGrid>
  );
}

export default CategoryContent;
