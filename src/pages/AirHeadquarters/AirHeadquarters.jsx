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
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import Drawer from "components/WebAirComponents/Drawer";
import HeadquarterForm from "components/WebAirComponents/Forms/HeadquarterForm";
import WebAirTable from "components/WebAirComponents/WebAirTable";

// Info:Displays page of all the headquarters

// Note: 本部の共通オブジェクト:
// hqCd, hqName, email, disabled, createdBy, createdAt, modifiedBy, mmodifiedAt.
//TODO : general layout: Search, pagination table with searchParams handler.

import { hqColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";

import { hqData } from "components/WebAirComponents/hqMockData";
import HeadquartersTable from "components/WebAirComponents/Tables/HeadquartersTable";

export default function AirHeadquarters() {
  // Chakra Color Mode
  // const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorBrand = useColorModeValue("brand.500", "white");
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
          <HeadquartersTable />
        </TableContainer>
        <Drawer>
          <Drawer.Open>
            <Button variant="brand" size="lg">
              本部登録
            </Button>
          </Drawer.Open>
          <Drawer.Paper title="本部登録">
            <HeadquarterForm />
          </Drawer.Paper>
        </Drawer>
      </Grid>
    </>
  );
}
