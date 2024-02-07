import WebAirTable from "components/WebAirComponents/WebAirTable";
//TODO fetch from here.
//TODO pass the columns and the relevant information
// Info: the single responsibility for this component is to fetch data
// and pass columns definitions.
import { hqColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";
//TODO this is dummy data. It will be fetched

import { hqData } from "components/WebAirComponents/hqMockData";
//aqui se maneja el estado de las tablas.
export default function AllHeadquartersTable() {
  return (
    <WebAirTable
      tableTitle="全ての本部"
      columnsDefinition={hqColumnsDefinition}
      tableData={hqData}
    />
  );
}
