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
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
// import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
// import NFT from "components/card/NFT";
import Card from "components/card/Card.js";
// import ColumnsTable from "./components/ColumnsTable";
// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
// import Avatar1 from "assets/img/avatars/avatar1.png";
// import Avatar2 from "assets/img/avatars/avatar2.png";
// import Avatar3 from "assets/img/avatars/avatar3.png";
// import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

import AllHeadquartersTable from "./components/AllHeadquartersTable";

//TODO mientras puedes hacer tus propios componentes, en base a lo que ya tienes.
// Una mejor organización de dará desyunar perdedores.
//TODO Descomponer la 4c olumn table, y hacerla de 3 o 2!
//TODO Lo correcto, es hacer una sola página de.

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
// Info:Displays page of all the headquarters
export default function AirHeadquarters() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorBrand = useColorModeValue("brand.500", "white");

  return (
    <>
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
          <Flex direction="column">
            {/* //TODO rescue this Flex box as the Header on a Box. */}
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                本部一覧
              </Text>
              <InlineLinks links={inlineLinks} />
            </Flex>
            {/* // Note: Tackle width and flex properties for responsiveness */}
            <Box w="100%">
              {/* //TODO make the table for the headquarters */}
              <AllHeadquartersTable />
              {/* <WebAirTable
                tableTitle="全ての本部"
                columnDefinitions={[]}
                tableData={[]}
              /> */}
            </Box>
            {/* // Note: a vertical grid containing 2  */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px"></SimpleGrid>
            <Text
              mt="45px"
              mb="36px"
              color={textColor}
              fontSize="2xl"
              ms="24px"
              fontWeight="700"
            >
              Recently Added
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap="20px"
              mb={{ base: "20px", xl: "0px" }}
            ></SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px">
            <TableTopCreators
              k
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card p="0px">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                History
              </Text>
              <Button variant="action">See all</Button>
            </Flex>

            <HistoryItem
              name="Colorful Heaven"
              author="By Mark Benjamin"
              date="30s ago"
              image={Nft5}
              price="0.91 ETH"
            />
          </Card>
        </Flex>
      </Grid>
    </>
  );
}
