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

const textStyle = {
  position: "absolute",
  bottom: 10,
  left: 150,
  padding: "8px",
  color: "beige",
  fontSize: "16px",
  fontWeight: "bold",
  fontFamily: "Century Gothic, sans-serif",
  textShadow: "10px 10px 20px rgba(100, 100, 20, 1.5)",
  width: "100%", // Take up the full width of the container
  background: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
  borderRadius: "0 0 10px 10px", // Rounded corners only at the bottom // Adjust the shadow values as needed
};

const gradientOverlay = {
  position: "absolute",
  bottom: 35,
  left: 0,
  width: "70%",
  height: "10%", // Adjust the height for the desired shading area
  background: "linear-gradient(to bottom, rgba(100,0,0,0), rgba(10,0,50,0.7))", // Adjust the gradient color and opacity
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

  return !loading ? (
    <Flex justify="space-between">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={showPrevious}
        size="lg"
        colorScheme="blue"
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
        colorScheme="blue"
        isRound
        right="20px" // Move to the right (adjust the value)
        transform="translate(0, 150%)"
      />
    </Flex>
  ) : (
    <LoadingSpinner />
  );
}

export default LocationsSection;
