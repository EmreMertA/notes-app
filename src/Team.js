import { Flex, Text, Heading, Button } from "@chakra-ui/react";

const Team = ({ text, value, title }) => {
  return (
    <Flex
      pt="10px"
      pb="45px"
      px="20px"
      borderRadius="15px"
      border="5px solid #C3F2FF"
      w="600px"
      h="auto"
      minH="125px"
      bgColor="#E6F8FD"
      direction="column"
      position="relative"
    >
      <Heading size="sm">{title}</Heading>
      <Text
        fontSize="9px"
        color="#fff"
        bgColor="teal"
        padding="2px"
        width="45px"
        borderRadius="10px"
        position="absolute"
        right="1"
        top="1"
      >
        önemi: {value}
      </Text>
      <Text noOfLines={4} fontSize="12px" mt="3px">
        {text}
      </Text>

      <Button
        right="2"
        bottom="2"
        position="absolute"
        w={14}
        bgColor="#E5212D"
        color="#fff"
        h={8}
        fontSize="sm"
      >
        Sil
      </Button>
      <Button
        right="70px"
        bottom="2"
        position="absolute"
        w={14}
        bgColor="#20D79E"
        color="#fff"
        h={8}
        fontSize="sm"
      >
        Düzenle
      </Button>
    </Flex>
  );
};

export default Team;
