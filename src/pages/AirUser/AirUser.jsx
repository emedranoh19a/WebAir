import { Box, Flex, Grid, IconButton, SimpleGrid } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";
import StoreShowcase from "components/WebAirComponents/Showcase/StoreShowcase";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import UserShowcase from "components/WebAirComponents/Showcase/UserShowcase";

export default function AirUser() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const navigate = useNavigate();
  // TODO: There should be a table of headquarters: The store headquarters,
  return (
    <Box>
      {/* Main Fields:	userId, userName, loginID, email, authors, disabled.
       */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          {/* <Banner /> */}
          <Flex direction="row" gap="20px" width="90%">
            {/* //TODO rescue this Flex box as the Header on a Box. */}
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="brand"
              aria-label="Done"
              fontSize="20px"
              icon={<FaArrowLeft />}
              onClick={() => navigate(-1)}
              opacity="0.9"
            />
            {/* <HeadquarterShowcase /> */}
            <UserShowcase />

            {/* // Note: Tackle width and flex properties for responsiveness */}

            {/* // Note: a vertical grid containing 2  */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px"></SimpleGrid>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
