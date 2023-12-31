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
  Link,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useContext, useState } from "react";
import authService from "../services/auth.service";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import useToastMessage from "../utils/useToastMessage";

function SignupPage({ isAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {showToast} = useToastMessage();

  const defaultImage = "https://avatars.dicebear.com/api/male/username.svg"



  const handleSignUp = () => {
    const requestBody = { email, password, firstName, lastName, username, image:defaultImage };
    if (isAdmin) {
      requestBody["isAdmin"] = true;
    }
    setIsLoading(true);
    authService
      .signup(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        showToast('Account Create', `${username} account has been created successfully`, 'success')
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response) {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
          showToast('Fail to create account', errorMessage, 'error');
        }
      });
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
            {isAdmin && <Text>Create Admin</Text>}
            {!isAdmin && <Text>Create User</Text>}
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Creating"
                size="lg"
                isLoading={isLoading}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSignUp}
              >
                Create
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} href="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SignupPage;
