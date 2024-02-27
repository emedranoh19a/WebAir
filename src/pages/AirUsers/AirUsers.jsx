import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import Drawer from "components/WebAirComponents/Drawer";
//TODO make the users form
import StoreForm from "components/WebAirComponents/Forms/StoreForm";
import UserForm from "components/WebAirComponents/Forms/UserForm";
import WebAirTable from "components/WebAirComponents/WebAirTable";
import { usersColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";
import { usersMockData } from "components/WebAirComponents/usersMockData";
export default function AirUsers() {
  //TODO Add headquarters list, stores list, and services. (Showcase or list?)
  function linkGenerator(cell) {
    const {
      original: { userId },
    } = cell;

    return `/users/${userId}`;
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
  // TODO Add some style fixes for each cell in the stores data definition.

  // TODO Make the showcase for a single Store.
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
            tableTitle="ユーザ一覧"
            columnsDefinition={usersColumnsDefinition}
            tableData={usersMockData}
            linkGenerator={linkGenerator}
          />
        </TableContainer>
        <Drawer>
          <Drawer.Open>
            <Button variant="brand" size="lg">
              ユーザ登録
            </Button>
          </Drawer.Open>
          {/* //TODO conditionally the title "create or edit" */}
          <Drawer.Paper title="ユーザー登録">
            <UserForm />
          </Drawer.Paper>
        </Drawer>
      </Grid>
    </>
  );
}
