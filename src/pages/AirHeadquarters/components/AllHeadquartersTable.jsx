import WebAirTable from "components/WebAirComponents/WebAirTable";

// Info: the single responsibility for this component is to fetch data
// and pass columns definitions.
import { hqColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";

import { hqData } from "components/WebAirComponents/hqMockData";
//aqui se maneja el estado de las tablas.
export default function AllHeadquartersTable() {
  //TODO hacer un fetch aqui de todo. Reemplazar dummy data en su punto.
  return (
    <WebAirTable
      tableTitle="全ての本部"
      columnsDefinition={hqColumnsDefinition}
      tableData={hqData}
    />
  );
}
