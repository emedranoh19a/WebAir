import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

export default function Stores(props) {
  // Info: This component is going to render differently, depending on the urlParams and searchParams.
  //For example, in the page hq/:1, it should render only stores of hqCd 1.
  //In the page of /stores (main), it should display all the stores.
  //In the page of /stores/id It should not be displayed!!! How can a store have other entities of itself?
  // In the /users/:userId page, it should render only the stores that the user 17 has.

  const { columnsData, tableData } = props;

  // Note: We use the memo hook so that memorize the column's value, so it doesn't get called on every render.
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  initialState.pageSize = 10;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  // TODO descomponer la tabla en componentes pequeños.
  //Decomposed into constants due to hooks usage and prop-drilling avoids.
  function CardTitle() {
    return (
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          {/* //TODO conditional renders. 
          //If there is a relevant url param: then display something else: ""
          //If there is not url Params: Render "all the stores."
          */}
          店舗情報
        </Text>
        <Menu />
      </Flex>
    );
  }
  function TableHeadItem({ column }) {
    return (
      <Th
        {...column.getHeaderProps(column.getSortByToggleProps())}
        pe="10px"
        // key={index}
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
    );
  }

  function TableHead() {
    return (
      <Thead>
        {/* // note:  headerGroups extracted from react-table hook */}
        {headerGroups.map((headerGroup, index) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <TableHeadItem column={column} key={index} />
            ))}
          </Tr>
        ))}
      </Thead>
    );
  }
  function TableBodyItem({ cell }) {
    console.log(cell);

    // Info: Defining conditional styles and unit renders for each body cell.
    let justifyContent = "start";
    let unit = "";
    switch (cell.column.Header) {
      case "NAME":
        break;
      case "PROGRESS":
        unit = "%";
        break;
      case "QUANTITY":
        justifyContent = "end";
        break;
      case "DATE":
        break;
      default:
        break;
    }
    return (
      <Td
        {...cell.getCellProps()}
        // key={index}
        fontSize={{ sm: "14px" }}
        minW={{ sm: "150px", md: "200px", lg: "auto" }}
        borderColor="transparent"
      >
        <Text color={textColor} fontSize="sm" fontWeight="700">
          <Flex justify={justifyContent}>
            <Text me="10px" color={textColor} fontSize="sm" fontWeight="700">
              {cell.value}
              {unit}
            </Text>
          </Flex>
        </Text>
      </Td>
    );
  }

  function TableBody() {
    return (
      <Tbody {...getTableBodyProps()}>
        {/* // note: page extracted from react-table hook */}
        {page.map((row, index) => {
          // // note: prepareRow extracted from react-table hook
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => (
                <TableBodyItem cell={cell} key={index} />
              ))}
            </Tr>
          );
        })}
      </Tbody>
    );
  }

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <CardTitle />
      {/* // note: extracted from react-table hook */}
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <TableHead />
        {/* // note: getTableBodyProps extracted from react-table hook */}
        <TableBody />
      </Table>
    </Card>
  );
}
