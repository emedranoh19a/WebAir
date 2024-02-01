import WebAirTable from "components/WebAirComponents/WebAirTable";
//TODO fetch from here.
//TODO pass the columns and the relevant information
// Info: the single responsibility for this component is to fetch data
// and pass columns definitions.
import { hqColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";
//TODO this is dummy data. It will be fetched
//One headquarter is composed by:
//HqCd, int
// HqName, nvarchar(50)
// email, varchar (50)
//Disabled, bool
// CreatedBy, snowflake
// CreatedAt, dateTime
//ModifiedBy, snowflake
//ModifiedAt dateTime
import { hqData } from "components/WebAirComponents/hqMockData";
// const tableData = [
//   { hqCd: "山崎" },
//   //   {
//   //     name: "Marketplace",
//   //     status: "Approved",
//   //     date: "24.Jan.2021",
//   //     progress: 75.5,
//   //   },
//   //   {
//   //     name: "Market2ce",
//   //     status: "Disable",
//   //     date: "30.Dec.2021",
//   //     progress: 25.5,
//   //   },
//   //   {
//   //     name: "Market3place",
//   //     status: "Error",
//   //     date: "20.May.2021",
//   //     progress: 90,
//   //   },
//   //   {
//   //     name: "Marketplace",
//   //     status: "Approved",
//   //     date: "12.Jul.2021",
//   //     progress: 50.5,
//   //   },
// ];
export default function AllHeadquartersTable() {
  return (
    <WebAirTable
      tableTitle="全ての本部"
      columnsDefinition={hqColumnsDefinition}
      tableData={hqData}
    />
  );
}
