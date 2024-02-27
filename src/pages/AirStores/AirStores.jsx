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
import { Box, Button, Flex, Grid } from "@chakra-ui/react";

// Custom components
// import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
// import NFT from "components/card/NFT";
import Card from "components/card/Card.js";
// import ColumnsTable from "./components/ColumnsTable";
// Assets

import { storesColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";

import { hqData } from "components/WebAirComponents/hqMockData";
import WebAirTable from "components/WebAirComponents/WebAirTable";
import HeadquarterForm from "components/WebAirComponents/Forms/HeadquarterForm";
import Drawer from "components/WebAirComponents/Drawer";
import { storesMockData } from "components/WebAirComponents/storesMockData";
import StoreForm from "components/WebAirComponents/Forms/StoreForm";
export default function AirStores() {
  function linkGenerator(cell) {
    const {
      original: { hqCd, storeCd },
    } = cell;

    return `/stores/${hqCd}/${storeCd}`;
  }

  const TableContainer = ({ children }) => (
    <Flex
      flexDirection="column"
      gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
    >
      <Flex direction="column">
        <Box w="100%">{children}</Box>
      </Flex>
    </Flex>
  );

  // TODO Replace the data for the stores.
  return (
    <>
      {/* TODO falta hacer un submit al presionar "Enter" */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr " }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <TableContainer>
          <WebAirTable
            tableTitle="全ての店舗"
            columnsDefinition={storesColumnsDefinition}
            tableData={storesMockData}
            linkGenerator={linkGenerator}
          />
        </TableContainer>
        <Drawer>
          <Drawer.Open>
            <Button variant="brand" size="lg">
              店舗登録
            </Button>
          </Drawer.Open>
          <Drawer.Paper title="店舗登録">
            <StoreForm />
          </Drawer.Paper>
        </Drawer>
      </Grid>
    </>
  );
}
