import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/user.service";
import { AuthContext } from "../context/auth.context";
import useToastMessage from "../utils/useToastMessage";

function PaymentForm({ activityId }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {showToast} = useToastMessage();
  const CURRENT_YEAR = new Date().getFullYear();

  let MONTHS = [],
    YEARS = [CURRENT_YEAR];
  for (let i = 1; i <= 12; i++) {
    const month = i.toString().length === 1 ? `0${i}` : i.toString();
    MONTHS.push(month);
    YEARS.push(YEARS[0] + i);
  }

  const handlePay = async () => {
    if (!name || !cvv || !expMonth || !expYear || !cardNumber) {
      return showToast(
        "Something went wrong",
        "Card details are incomplete, please check",
        "error"
      );
    }

    if (cvv.length !== 3) {
      return showToast(
        "Something went wrong",
        "CVV has to be 3 characters",
        "error"
      );
    }

    setLoading(true);
    try {
      // Mocking payment
      await userService.bookActivity(user._id, activityId);
      navigate("/");
      showToast("Booking Success", "Your booking was successful", "success");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Card Details
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={6}>
            <FormControl id="name" isRequired>
              <FormLabel>Card Holder's Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="number" isRequired>
              <FormLabel>Card Number</FormLabel>
              <Input
                type="text"
                value={cardNumber}
                placeholder="123 4567 8901 2345"
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl>
                  <FormLabel>Year</FormLabel>
                  <Select
                    placeholder=""
                    value={expYear}
                    onChange={(e) => setExpYear(e.target.value)}
                  >
                    {YEARS.map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormLabel>Month</FormLabel>
                <FormControl>
                  <Select
                    placeholder=""
                    value={expMonth}
                    onChange={(e) => setExpMonth(e.target.value)}
                  >
                    {MONTHS.map((month) => {
                      return (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>CVV</FormLabel>
                  <Input
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handlePay}
                loadingText="Submitting"
                isLoading={loading}
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                PAY NOW
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default PaymentForm;
