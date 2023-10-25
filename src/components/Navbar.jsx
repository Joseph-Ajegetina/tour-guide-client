import {
  useDisclosure,
  chakra,
  Box,
  useColorModeValue,
  Flex,
  HStack,
  IconButton,
  VStack,
  Button,
  CloseButton,
  VisuallyHidden,
  Avatar,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import {BsCardList} from "react-icons/bs"
import { useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const header = useRef(null);
  const [y, setY] = useState(0);
  const height = header.current ? header.current.getBoundingClientRect() : 0;

  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  return (
    <Box shadow="md" pos="relative">
      <chakra.header
        ref={header}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        borderTop="6px solid"
        borderTopColor="brand.400"
        overflowY="hidden"
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                {isLoggedIn && (
                  <>
                    {user.isAdmin && (
                      <Button
                        variant="ghost"
                        leftIcon={<AiFillHome />}
                        size="sm"
                      >
                        <Link to="/dashboard">Dashboard</Link>
                      </Button>
                    )}

                    <Button variant="ghost" leftIcon={<BsCardList />} size="sm">
                      <Link to="/wishlist">Wish List</Link>
                    </Button>
                    <Button variant="ghost" leftIcon={<BsCardList />} size="sm">
                      <Link to="/bookings">Bookings</Link>
                    </Button>
                  </>
                )}
                {!isLoggedIn && (
                  <>
                    <Button variant="ghost" leftIcon={<BiLogIn />} size="sm">
                      <Link to="/login">Log In</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      leftIcon={<BiLogOut />}
                      size="sm"
                      onClick={logOutUser}
                    >
                      Log Out
                    </Button>
                  </>
                )}
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              Logo
              <VisuallyHidden>Tour Guide</VisuallyHidden>
            </chakra.a>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack
              spacing={3}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              {isLoggedIn && (
                <>
                  {user.isAdmin && (
                    <>
                      <Button
                        variant="ghost"
                        leftIcon={<AiFillHome />}
                        size="sm"
                      >
                        <Link to="/dashboard">Dashboard</Link>
                      </Button>
                    </>
                  )}
                </>
              )}
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    user
                      ? user.image
                      : "https://avatars.dicebear.com/api/male/username.svg"
                  }
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                {!isLoggedIn && (
                  <>
                    <MenuItem>
                      <Link to="/login">Sign In</Link>
                    </MenuItem>
                    <MenuItem>
                      <Center>
                        <Link to="/signup">Sign up</Link>
                      </Center>
                    </MenuItem>
                  </>
                )}
                {isLoggedIn && (
                  <>
                    <MenuItem>
                      <Link to="/profile">Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={logOutUser}>Logout</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
}

export default NavBar;
