import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// import {
//   PaginationState,
//   useReactTable,
//   getCoreRowModel,
//   ColumnDef,
//   flexRender,
// } from "react-table";
import { useMemo, useReducer, useState } from "react";
import { hqColumnsDefinition } from "../columnsDefinitions";
import { hqData } from "../hqMockData";
import WebAirTable from "../WebAirTable";
export default function HeadquartersTable() {
  //Dispatches an action to the reducer function, causing a state update.
  //Since a new object is dispatched, React detects a new state (JS behaviour),
  // and it triggers a re-render of the component. Clever trick that might be good to know!

  //TODO esto va adentro de Pagination controls.
  const rerender = useReducer(() => ({}), {})[1];
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  //TODO extract the headquarters data with React Query. Use the following code:
  // const dataQuery = useQuery({
  //   queryKey: ["data", pagination],
  //   queryFn: () => fetchData(pagination),
  //   placeholderData: keepPreviousData, // don't have 0 rows flash while changing pages/loading next page
  // });

  //Inicializar la table con los datos obtenidos del query.

  //TODO rescatables:
  // TODO sustituir data dentro de la tabla.
  //   const table = useReactTable({
  //     //   data: dataQuery.data?.rows ?? defaultData,
  //     data: data?.rows ?? defaultData,
  //     columns,
  //     // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
  //     rowCount: data?.rowCount, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
  //     state: {
  //       pagination,
  //     },
  //     onPaginationChange: setPagination,
  //     getCoreRowModel: getCoreRowModel(),
  //     manualPagination: true, //we're doing manual "server-side" pagination
  //     // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
  //     debugTable: true,
  //   });

  function linkGenerator(cell) {
    const {
      original: { hqCd },
    } = cell;

    return `/headquarters/${hqCd}`;
  }
  //The following table must be used only and only for the headquarters
  return (
    <WebAirTable
      tableTitle="全ての本部"
      columnsDefinition={hqColumnsDefinition}
      tableData={hqData}
      linkGenerator={linkGenerator}
    />
  );
}
// TODO: For instance. manage only the table.
// TODO: Make a Pagination component, positionate it on the bottom of the table.
// TODO: Refactor the code: Components should handle separation of concerns.

// const queryClient = new QueryClient();

// function App() {
// Note: Toda la tabla se imprime en automático.
// Note: Pagination controls.
//   return (
//
// TODO implementar el botón <<
//
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
//
//
//
//
//

//       <div>
//         <button onClick={() => rerender()}>Force Rerender</button>
//
//
//
//

//       <pre>{JSON.stringify(pagination, null, 2)}</pre>
//
//   );
