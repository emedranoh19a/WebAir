import React, { useMemo, useState } from "react";
import {
  Flex,
  LinkBox,
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
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

import Card from "components/card/Card";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
import { useNavigate } from "react-router-dom";

// Note: can we specify an uncompleted navigation? This way
// TODO: Make the table rows smaller in height. Change the layout, fontSize, add columns, remove padding...
export default function WebAirTable({
  tableTitle,
  columnsDefinition,
  tableData,
  linkGenerator, //Es una función que genera un link de navegación. los parámetros se van a concatenar.
}) {
  // Info: flexible by accepting column render definition and data.
  const columns = useMemo(() => columnsDefinition, [columnsDefinition]);
  const data = useMemo(() => tableData, [tableData]);
  const defaultData = useMemo(() => [], []);

  // const tableInstance = useTable(
  //   {
  //     columns,
  //     data,
  //   },
  //   useGlobalFilter,
  //   useSortBy,
  //   usePagination
  // );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), //order doesn't matter anymore!
    // etc.
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = table;
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
  //TODO declarar el re-render. para la definición de columnas.
  // TODO luego atrapar la definición de columnas correspondiete.
  //TODO Manejar el estado, que contenga pageIndex y pageSize.
  // TODO usar React Query para obtener los datos. esto ya debería ser pan comido.
  // TODO memoize the data.
  // TODO extraer los hooks necesarios de react table.
  //
  return (
    <Card direction="column" w="100%" px="0px" overflowX={"scroll"}>
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <TableTitle />
        <SearchBar />
      </Flex>
      {/* <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px"> */}
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    pe="10px"
                    borderColor={borderColor}
                  >
                    {header.isPlaceholder ? null : (
                      <Flex
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "13px" }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Flex>
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>

        <Tbody>
          {table.getRowModel().rows.map((row, rowIndex) => {
            return (
              <Tr
                key={row.id}
                style={{ cursor: "pointer" }}
                bg={rowIndex % 2 === 0 ? "transparent" : "secondaryGray.300"}
                onClick={() => {
                  navigate(linkGenerator(row));
                }}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td
                      key={cell.id}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                      color={textColor}
                      // Note: Tackle this padding for greater scanability.
                      paddingY="1px"
                      paddingx="1px"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}

// const rerender = React.useReducer(() => ({}), {})[1];

// Info: Pagination controls from here.
//       <div className="h-2" />
//       <div className="flex items-center gap-2">
//         <button
//           className="border rounded p-1"
//           onClick={() => table.firstPage()}
//           disabled={!table.getCanPreviousPage()}
//         >
//           {"<<"}
//         </button>
//         <button
//           className="border rounded p-1"
//           onClick={() => table.previousPage()}
//           disabled={!table.getCanPreviousPage()}
//         >
//           {"<"}
//         </button>
//         <button
//           className="border rounded p-1"
//           onClick={() => table.nextPage()}
//           disabled={!table.getCanNextPage()}
//         >
//           {">"}
//         </button>
//         <button
//           className="border rounded p-1"
//           onClick={() => table.lastPage()}
//           disabled={!table.getCanNextPage()}
//         >
//           {">>"}
//         </button>
//         <span className="flex items-center gap-1">
//           <div>Page</div>
//           <strong>
//             {table.getState().pagination.pageIndex + 1} of{" "}
//             {table.getPageCount().toLocaleString()}
//           </strong>
//         </span>
//         <span className="flex items-center gap-1">
//           | Go to page:
//           <input
//             type="number"
//             defaultValue={table.getState().pagination.pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               table.setPageIndex(page);
//             }}
//             className="border p-1 rounded w-16"
//           />
//         </span>
//         <select
//           value={table.getState().pagination.pageSize}
//           onChange={(e) => {
//             table.setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//         {dataQuery.isFetching ? "Loading..." : null}
//       </div>
//       <div>
//         Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
//         {dataQuery.data?.rowCount.toLocaleString()} Rows
//       </div>
//       <div>
//         <button onClick={() => rerender()}>Force Rerender</button>
//       </div>
//       <pre>{JSON.stringify(pagination, null, 2)}</pre>
//     </div>
//   );
// }
