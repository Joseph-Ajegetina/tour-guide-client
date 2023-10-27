import React, { useEffect, useState } from "react";
import uploadService from "../../services/upload.service";
import userService from "../../services/user.service";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  Center,
  useToast,
} from "@chakra-ui/react";
import useToastMessage from "../../utils/useToastMessage";

function ProfilePage() {
  const { user, updateImage } = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState(user.image);

  const [show, setShow] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { showToast } = useToastMessage();
  const handleImageUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("imgUrl", e.target.files[0]);
    setIsBtnLoading(true);

    try {
      const res = await uploadService.single(uploadData);
      setImageUrl(res.data.fileUrl);
      hideFileInput();
      showToast("Update", "Image uploaded successfully", "success");
    } catch (err) {
      console.error("Error while uploading the file: ", err);
      showToast("Error", "Could not upload image", "error");
    } finally {
      setIsBtnLoading(false);
      hideFileInput();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShow = () => {
    setShow(true);
  };

  const hideFileInput = () => {
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, image: imageUrl };
    setIsSpinnerLoading(true);
    try {
      await userService.update(user._id, payload);
      showToast("Update", "Profile updated successfully", "success");
      updateImage(imageUrl);
    } catch (error) {
      console.error(error);
      showToast(
        "Error Update",
        "Something went wrong updating profile",
        "error"
      );
    } finally {
      setIsSpinnerLoading(false);
    }
  };

  const setFormUserData = (data) => {
    setFormData({
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    });

    if (data.image) {
      setImageUrl(data.image);
    }
  };

  const getCurrentUser = async () => {
    setIsSpinnerLoading(true);
    try {
      const res = await userService.getUser(user._id);
      const data = res.data.user;
      setFormUserData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSpinnerLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Update Your Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={imageUrl}></Avatar>
            </Center>
            <Center w="full">
              <Stack>
                {show && <Input type="file" onChange={handleImageUpload} />}
                <Button onClick={handleShow} isLoading={isBtnLoading}>
                  Change Icon
                </Button>
              </Stack>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName">
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="Enter your first name."
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="Lastname">
          <FormLabel>Lastname</FormLabel>
          <Input
            placeholder="Enter your lastname"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Phonne</FormLabel>
          <Input
            placeholder="tel"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            isLoading={isSpinnerLoading}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default ProfilePage;
