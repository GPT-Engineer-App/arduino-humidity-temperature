import React from "react";
import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { FaThermometerHalf, FaTint } from "react-icons/fa";

const Index = () => {
  // Example data, replace with real data fetching logic
  const temperature = "22°C";
  const humidity = "45%";

  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl">
        Arduino Temperature and Humidity Monitor
      </Heading>
      <Image src="https://images.unsplash.com/photo-1557855506-3619a44bab73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwc2V0dXB8ZW58MHx8fHwxNzE0MzA0OTY1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Arduino Setup" boxSize="300px" />
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <VStack>
          <Text fontSize="2xl">
            <FaThermometerHalf /> Temperature: {temperature}
          </Text>
          <Text fontSize="2xl">
            <FaTint /> Humidity: {humidity}
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
