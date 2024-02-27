import React from "react";

// Chakra imports
import {
  Center,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
      <Center padding="20px">
        <Text fontSize="4xl">
          <span
            style={{
              fontWeight: "bold",
              letterSpacing: "1px",
              color: "brand",
            }}
          >
            Web
          </span>
          <span
            style={{
              fontStyle: "italic",
              letterSpacing: "2px",
              color: "#422afb",
            }}
          >
            Air
          </span>
        </Text>
      </Center>
      {/* <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} /> */}
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
