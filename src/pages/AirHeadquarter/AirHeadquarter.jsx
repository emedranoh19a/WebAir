/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Link,
  useColorModeValue,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import HeadquarterShowcase from "components/WebAirComponents/Showcase/HeadquarterShowcase";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import NFTMarketplace from "views/admin/marketplace";

// Custom components
// import Banner from "views/admin/marketplace/components/Banner";
// import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
// import HistoryItem from "views/admin/marketplace/components/HistoryItem";
// import NFT from "components/card/NFT";
// import Card from "components/card/Card.js";
// import ColumnsTable from "./components/ColumnsTable";
// Assets
// import Nft1 from "assets/img/nfts/Nft1.png";
// import Nft2 from "assets/img/nfts/Nft2.png";
// import Nft3 from "assets/img/nfts/Nft3.png";
// import Nft4 from "assets/img/nfts/Nft4.png";
// import Nft5 from "assets/img/nfts/Nft5.png";
// import Nft6 from "assets/img/nfts/Nft6.png";
// import Avatar1 from "assets/img/avatars/avatar1.png";
// import Avatar2 from "assets/img/avatars/avatar2.png";
// import Avatar3 from "assets/img/avatars/avatar3.png";
// import Avatar4 from "assets/img/avatars/avatar4.png";
// import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
// import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

// import AllHeadquartersTable from "./components/AllHeadquartersTable";

const inlineLinks = [
  { link: "#art", label: "Art" },
  { link: "#music", label: "Music" },
  { link: "#collectibles", label: "Collectibles" },
  { link: "#sports", label: "Sports" },
];

function InlineLinks({ links }) {
  function InlineLink({ link, linkLabel }) {
    const textColorBrand = useColorModeValue("brand.500", "white");
    return (
      <Link
        color={textColorBrand}
        fontWeight="500"
        me={{ base: "34px", md: "44px" }}
        to={link}
      >
        {linkLabel}
      </Link>
    );
  }
  return (
    <Flex
      align="center"
      me="20px"
      ms={{ base: "24px", md: "0px" }}
      mt={{ base: "20px", md: "0px" }}
    >
      {links.map(({ link, label }, index) => (
        <InlineLink key={index} link={link} linkLabel={label} />
      ))}
    </Flex>
  );
}
// Info:Displays details of a single headquarter
export default function AirHeadquarter() {
  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const navigate = useNavigate();
  return (
    <Box>
      {/* Main Fields */}
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
            <HeadquarterShowcase />

            {/* // Note: Tackle width and flex properties for responsiveness */}

            {/* // Note: a vertical grid containing 2  */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px"></SimpleGrid>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
