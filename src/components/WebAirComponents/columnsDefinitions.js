// Note:
//Other cells of the original row are accessible by one cell.

import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdCancel, MdCheckCircle } from "react-icons/md";

//Cells. Presentational components
function StackedInfo({ topRow, bottomRow }) {
  return (
    <Flex direction="column" justify="center">
      <Text fontSize="lg" fontWeight="700">
        {topRow}
      </Text>
      <Text fontSize="xs" color="gray.500">
        {bottomRow}
      </Text>
    </Flex>
  );
}

function StackedUserActivity({ author, date }) {
  //TODO reformat the date.

  return (
    <Flex direction="column">
      {/* TODO This should navigate to the wsUser page */}
      <Text fontSize="sm" fontWeight="700" color="gray.400">
        {author}
      </Text>
      <Text fontSize="xs" color="gray.500">
        {date}
      </Text>
    </Flex>
  );
}

function StandardText({ text }) {
  return (
    <Text fontSize="sm" fontWeight="700">
      {text}
    </Text>
  );
}

function DisabledStatus({ isDisabled }) {
  return (
    <Flex align="center">
      <Icon
        w="24px"
        h="24px"
        opacity={0.8}
        me="5px"
        color={!isDisabled ? "green.500" : "red.500"}
        as={!isDisabled ? MdCheckCircle : MdCancel}
      />
      <Text fontSize="sm" fontWeight="700">
        {!isDisabled ? "有効" : "無効"}
      </Text>
    </Flex>
  );
}

export const hqColumnsDefinition = [
  {
    Header: "本部",
    accessor: "hqCd",
    Cell: ({
      value,
      row: {
        original: { hqCd, hqName },
      },
    }) => <StackedInfo topRow={hqName} bottomRow={hqCd} />,
  },
  {
    Header: "メール",
    accessor: "email",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "登録情報",
    accessor: "createdBy",
    Cell: ({
      row: {
        original: { createdBy, createdAt },
      },
    }) => <StackedUserActivity author={createdBy} date={createdAt} />,
  },
  {
    Header: "更新情報",
    accessor: "modifiedBy",
    Cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <StackedUserActivity author={modifiedBy} date={modifiedAt} />,
  },
  {
    Header: "状態",
    accesor: "disabled",
    Cell: ({ row: { original } }) => (
      <DisabledStatus isDisabled={original.disabled} />
    ),
  },
];

// cosas que hacer solo para una fk tabla.
// TODO Hacer la definición de columnas de Stores
// TODO Hacer la definición de columnas de Users
// TODO Hacer la definición de columnas de AirSevices
// TODO Hacer la definición de columnas de wsUsers
// TODO Hacer la definición de columnas de viewedBy, modifiedBy. Actividad por parte de WSUsers
// TODO Investigar que onda con el filtrado de las páginas
// TODO Crear una barra de búsqueda para buscar por cada tabla.
// TODO Darle formato a las fechas con moment JS, o date-fns, o algo.

//TODO Crear datos falsos para la tabla de Stores
//TODO Crear datos falsos para la tabla de Users
//TODO Crear datos falsos para la tabla de AirServices

//TODO agregar un anchor a cada hilera según sea el caso.

// TODO componentes dedicados al fetch para cada tabla.

//TODO Refactor. Creo que  necesito definir componentes más peque
// Note: Stores table definition:
//storeCd int
//hqCd int
//StoreName
//email
//ftpUser
//ftpPass
//disabled
//createdBy
//createdAt
//modifiedBy
//modifiedAt
