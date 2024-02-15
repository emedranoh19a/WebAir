import React, { useMemo } from "react";
import {
  Flex,
  LinkOverlay,
  // HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

import Card from "components/card/Card";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { useNavigate } from "react-router-dom";

// Note: can we specify an uncompleted navigation? This way

export default function WebAirTable({
  tableTitle,
  columnsDefinition,
  tableData,
  linkGenerator, //Es una función que genera un link de navegación. los parámetros se van a concatenar.
}) {
  // Info: flexible by accepting column render definition and data.
  const columns = useMemo(() => columnsDefinition, [columnsDefinition]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const navigate = useNavigate();
  const TableTitle = () => {
    return (
      <Text
        color={textColor}
        fontSize="22px"
        fontWeight="700"
        lineHeight="100%"
      >
        {tableTitle}
      </Text>
    );
  };

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <TableTitle />
        <SearchBar />
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <React.Fragment key={index}>
                <Tr
                  {...row.getRowProps()}
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(linkGenerator(row));
                  }}
                >
                  {row.cells.map((cell, index) => (
                    <Td
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                      color={textColor}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </Td>
                  ))}
                </Tr>
              </React.Fragment>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
