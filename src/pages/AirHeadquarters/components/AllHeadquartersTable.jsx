import WebAirTable from "components/WebAirComponents/WebAirTable.jsx";

// Info: the single responsibility for this component is to fetch data
// and pass columns definitions.
import { hqColumnsDefinition } from "components/WebAirComponents/columnsDefinitions";

import { hqData } from "components/WebAirComponents/hqMockData";
//aqui se maneja el estado de las tablas.
export default function AllHeadquartersTable() {
  //TODO hacer un fetch aqui de todo. Reemplazar dummy data en su punto.

  function linkGenerator(cell) {
    const {
      original: { hqCd },
    } = cell;

    return `/headquarters/${hqCd}`;
  }
  //TODO aqui debemos de manejar todo lo que tenga que ver con paginación,
  // en cuanto a datos remotos.

  // TODO esta tabla debería ser paginable dentro de Web Air Table.
  // Ponte a trabajar en eso.
  return (
    <WebAirTable
      tableTitle="全ての本部"
      columnsDefinition={hqColumnsDefinition}
      tableData={hqData}
      linkGenerator={linkGenerator}
    />
  );
}
