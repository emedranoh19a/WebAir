import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import Drawer from "components/WebAirComponents/Drawer";
import ServiceForm from "components/WebAirComponents/Forms/ServiceForm";
import WebAirTable from "components/WebAirComponents/WebAirTable";
import { servicesColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";
// import { storesColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";
// import { storesMockData } from "components/WebAirComponents/storesMockData";
import { servicesMockData } from "components/WebAirComponents/servicesMockData";
export default function AirServices() {
  function linkGenerator(cell) {
    const {
      original: { serviceId },
    } = cell;

    return `/services/${serviceId}`;
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
            tableTitle="サービス一覧"
            columnsDefinition={servicesColumnsDefinition}
            tableData={servicesMockData}
            linkGenerator={linkGenerator}
          />
        </TableContainer>
        <Drawer>
          <Drawer.Open>
            <Button variant="brand" size="lg">
              サービス登録
            </Button>
          </Drawer.Open>
          <Drawer.Paper title="サービス登録">
            <ServiceForm />
          </Drawer.Paper>
        </Drawer>
      </Grid>
    </>
  );
}
