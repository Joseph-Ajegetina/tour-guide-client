import React, { useState, useEffect } from "react";
import { Image, Flex, Text, IconButton, Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import locationsService from "../services/location.service";
import useToastMessage from "../utils/useToastMessage";
import LoadingSpinner from "./loading/LoadingSpinner";
import LocationCard from "./LocationCard";
const cardStyle = {
  position: "relative",
  maxWidth: "300px",
  matgin: "0 10px",
};

function LocationsSection() {
  const [locations, setLocations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToastMessage();

  useEffect(() => {
    getAllLocations();
  }, []);

  const getAllLocations = async () => {
    setLoading(true);
    try {
      const res = await locationsService.getAllLocations();
      setLocations(res.data);
    } catch (err) {
      console.error(err);
      showToast("Error ", "Something went wrong getting locations", "error");
    } finally {
      setLoading(false);
    }
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < locations.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : locations.length - 1
    );
  };

  return (
    !loading && (
      <Flex justify="space-between">
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={showPrevious}
          size="lg"
          colorScheme="orange"
          isRound
          transform="translate(0, 150%)"
          // Add any additional styling you need
        />
        {locations &&
          locations.map((location, index) => {
            if (index >= currentIndex && index < currentIndex + 5) {
              return <LocationCard key={location._id} location={location} />;
            }
          })}

        <IconButton
          icon={<ChevronRightIcon />}
          onClick={showNext}
          size="lg"
          colorScheme="orange"
          isRound
          right="20px" // Move to the right (adjust the value)
          transform="translate(0, 150%)"
        />
      </Flex>
    )
  );
}

export default LocationsSection;
