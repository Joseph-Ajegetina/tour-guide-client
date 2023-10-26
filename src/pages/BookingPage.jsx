import {
  Text,
  Flex,
  Center,
  Divider,
  Heading,
  Stack,
  Image,
  Box,
  FormControl,
  InputLeftAddon,
  FormLabel,
  useColorModeValue,
  useToast,
  SimpleGrid,
  GridItem,
  InputGroup,
  Textarea,
  FormHelperText,
  Avatar,
  Icon,
  Button,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import activitiesService from "../services/activity.service";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import Product from "../components/Product";
import PaymentForm from "../components/PaymentForm";

function BookingPage() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const { activityId } = useParams();
  const bg = useColorModeValue("gray.50", "gray.800")

  const toast = useToast();

  const showToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      position: "top",
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };

  useEffect(() => {
    getActivityDetail();
  }, [activityId]);

  const getActivityDetail = async () => {
    try {
      const res = await activitiesService.getActivity(activityId);
      setActivity(res.data);
    } catch (err) {
      showToast("", "Something went wrong gettting the activity", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return !loading ? (
    <Box>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={bg}
      >
        <Stack>
        <Product activity={activity}/>
        </Stack>
        <Stack>
          <PaymentForm activityId={activityId}/>
        </Stack>
      </Flex>
    </Box>
  ) : (
    <LoadingSpinner />
  );
}

export default BookingPage;
