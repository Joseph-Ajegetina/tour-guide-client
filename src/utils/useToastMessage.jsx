import { useToast } from "@chakra-ui/react";

function useToastMessage() {
  const toast = useToast();

  const showToast = (title, description, status) => {
    toast({
      title: title,
      description:description,
      status:status,
      duration: 5000,
      position: 'top',
      isClosable: true
    });
  };

  return { showToast };
}

export default useToastMessage;
