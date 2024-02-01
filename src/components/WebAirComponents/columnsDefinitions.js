//We need a column definition for all the tables.

import { Flex, Icon, Progress, Text } from "@chakra-ui/react";
import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";
//good things to know: other cells in the row are accesible
export const hqColumnsDefinition = [
  {
    Header: "本部",
    accessor: "hqCd",
    Cell: ({ value, row: { original } }) => {
      const { hqCd, hqName } = original;
      return (
        <Flex direction="column">
          <Text fontSize="sm" fontWeight="700">
            {hqName}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {hqCd}
          </Text>
        </Flex>
      );
    },
  },
  {
    Header: "メール",
    accessor: "email",
    Cell: ({ value }) => {
      return (
        <Text fontSize="sm" fontWeight="700">
          {value}
        </Text>
      );
    },
  },
  {
    Header: "登録情報",
    accessor: "createdBy",
    Cell: ({ row: { original } }) => {
      const { createdBy, createdAt } = original;
      return (
        <Flex direction="column">
          <Text fontSize="sm" fontWeight="700" color="gray.400">
            {createdBy}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {createdAt}
          </Text>
        </Flex>
      );
    },
  },

  //   {
  //     Header: "STATUS",
  //     accessor: "status",
  //     Cell: ({ cell }) => (
  //       <Flex align="center">
  //         <Icon
  //           w="24px"
  //           h="24px"
  //           me="5px"
  //           color={
  //             cell.value === "Approved"
  //               ? "green.500"
  //               : cell.value === "Disable"
  //               ? "red.500"
  //               : cell.value === "Error"
  //               ? "orange.500"
  //               : null
  //           }
  //           as={
  //             cell.value === "Approved"
  //               ? MdCheckCircle
  //               : cell.value === "Disable"
  //               ? MdCancel
  //               : cell.value === "Error"
  //               ? MdOutlineError
  //               : null
  //           }
  //         />
  //         <Text fontSize="sm" fontWeight="700">
  //           {cell.value}
  //         </Text>
  //       </Flex>
  //     ),
  //   },
  //   {
  //     Header: "DATE",
  //     accessor: "date",
  //     Cell: ({ cell }) => (
  //       <Text fontSize="sm" fontWeight="700">
  //         {cell.value}
  //       </Text>
  //     ),
  //   },
  //   {
  //     Header: "PROGRESS",
  //     accessor: "progress",
  //     Cell: ({ cell }) => (
  //       <Flex align="center">
  //         <Progress
  //           variant="table"
  //           colorScheme="brandScheme"
  //           h="8px"
  //           w="108px"
  //           value={cell.value}
  //         />
  //       </Flex>
  //     ),
  //   },
];
