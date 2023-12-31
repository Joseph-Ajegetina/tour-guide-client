import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Logo = () => {
  return <Image w={20} src={logo} />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function Footer() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Box
      bg= "#40300f"  
      // {useColorModeValue("gray.50", "gray.900")}
      color="papayawhip"
      // {useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        {isLoggedIn && (
          <>
            {" "}
            <Stack direction={"row"} spacing={6}>
              <Box as="a" href={"/profile"}>
                Profile
              </Box>
              <Box as="a" href={"/bookings"}>
                Bookings
              </Box>
              <Box as="a" href={"/wishlist"}>
                Wishlist
              </Box>
            </Stack>
          </>
        )}
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text color="papayawhip">© 2023 Travel Thrill     ---            All rights reserved

              <br  />
              Accra, Ghana
              <br />
              Crete, Greece
              <br />
              <br />

          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
export default Footer;
