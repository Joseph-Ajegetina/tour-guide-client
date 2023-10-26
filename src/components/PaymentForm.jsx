// import {
//   Box,
//   Input,
//   InputGroup,
//   Stack,
//   InputLeftElement,
//   Button,
//   useToast,
//   useToken,
//   Alert,
//   AlertIcon,
//   ScaleFade,
//   Center,
//   Spinner,
// } from "@chakra-ui/react";
// import { FiCreditCard, FiMail, FiUser } from "react-icons/fi";
// import { useEffect, useState } from "react";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// export const PaymentForm = () => {
//   // Some UI state => Ignore for now
//   const [whiteAlpha900, placeHolderColor] = useToken("colors", [
//     "whiteAlpha.900",
//     "whiteAlpha.400",
//   ]);
//   const toast = useToast({
//     position: "top",
//     isClosable: true,
//     duration: 3000,
//   });
//   const CARD_ELEMENT_OPTIONS = {
//     hidePostalCode: true,
//     iconStyle: "default",
//     style: {
//       base: {
//         iconColor: whiteAlpha900,
//         padding: "15px",
//         color: "white",
//         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//         fontSmoothing: "antialiased",
//         fontSize: "16px",
//         "::placeholder": {
//           color: placeHolderColor,
//         },
//       },
//       invalid: {
//         color: "#fa755a",
//         iconColor: "#fa755a",
//       },
//     },
//   };

//   // Simple cardError state to show error from stripe card element
//   const [cardError, setCardError] = useState("");
//   const [clientSecret, setClientSecret] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   // Init stripe and do some magic here
//   const stripe = useStripe();
//   const elements = useElements();
//   const card = elements?.getElement(CardElement);

//   const createPaymentIntent = async () => {
//     const res = await fetch("/api/secret", {
//       method: "POST",
//       body: JSON.stringify({
//         amount: 725.22 * 100,
//       }),
//     });
//     const { clientSecret: clientSecretRes } = await res.json();
//     setClientSecret(clientSecretRes);
//   };

//   const handleSubmit = async (values) => {
//     if (!stripe || !elements || cardError || !clientSecret) {
//       return;
//     }

//     try {
//       const { error: stripeError, paymentIntent } =
//         await stripe.confirmCardPayment(clientSecret, {
//           payment_method: {
//             card,
//             billing_details: {
//               name: values.name,
//             },
//           },
//         });

//       if (stripeError) {
//         throw new Error(stripeError.message);
//       } else if (paymentIntent?.status === "succeeded") {
//         toast({
//           title: "Payment Successfully Received",
//           status: "success",
//         });
//       }
//     } catch (error) {
//       toast({
//         title: "Error Occurred",
//         description: error.message,
//         status: "error",
//       });
//     }
//   };

//   useEffect(() => {
//     createPaymentIntent();
//   }, []);

//   return (
//     <Box p="2" px="4">
//       {({ isSubmitting, values, setFieldValue }) => (
//         <Stack pb="3" spacing={3}>
//           <InputGroup>
//             <InputLeftElement pointerEvents="none" children={<FiMail />} />
//             <Input
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               id="email"
//               placeholder="Email"
//               type="email"
//               required
//             />
//           </InputGroup>
//           <InputGroup>
//             <InputLeftElement pointerEvents="none" children={<FiUser />} />
//             <Input
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//               id="name"
//               placeholder="Name on card"
//               name="name"
//               required
//             />
//           </InputGroup>

//           <Box
//             rounded="md"
//             border="1px solid"
//             borderColor="inherit"
//             _hover={{ borderColor: "whiteAlpha.400" }}
//             display="flex"
//             h="10"
//           >
//             {!!stripe && !!elements ? (
//               <CardElement
//                 options={CARD_ELEMENT_OPTIONS}
//                 onChange={(e) => {
//                   setCardError(e.error?.message ?? "");
//                 }}
//               />
//             ) : (
//               <Center w="100%">
//                 <Spinner />
//               </Center>
//             )}
//           </Box>
//           <ScaleFade in={!!cardError} unmountOnExit>
//             <Alert status="error">
//               <AlertIcon />
//               {cardError}
//             </Alert>
//           </ScaleFade>
//           <Button
//             type="submit"
//             colorScheme="purple"
//             size="md"
//             isLoading={isSubmitting}
//             onClick={handleSubmit}
//             leftIcon={<FiCreditCard />}
//           >
//             Pay US$725.22
//           </Button>
//         </Stack>
//       )}
//     </Box>
//   );
// };

// export default PaymentForm;

"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import activitiesService from "../services/activity.service";
import authService from "../services/auth.service";
import { Navigate, useNavigate } from "react-router-dom";
import userService from "../services/user.service";
import { AuthContext } from "../context/auth.context";

function PaymentForm({ activityId }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const {user} = useContext(AuthContext)
   const toast = useToast();
  const navigate = useNavigate();

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
  const CURRENT_YEAR = new Date().getFullYear();

  let MONTHS = [],
    YEARS = [CURRENT_YEAR];
  for (let i = 1; i <= 12; i++) {
    const month = i.toString().length === 1 ? `0${i}` : i.toString();
    MONTHS.push(month);
    YEARS.push(YEARS[0] + i);
  }

  const handlePay = async () => {
    const res = activitiesService.updateActivity(activityId);
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
      const res = await userService.bookActivity(user._id, activityId);
      navigate('/')
      showToast("Booking Success", "Your booking was successful", "success")
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
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
                      return <option key={month} value={month}>{month}</option>;
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
