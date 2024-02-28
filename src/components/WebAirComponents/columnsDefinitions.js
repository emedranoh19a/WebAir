// Note:
//Other cells of the original row are accessible by one cell.

import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import Drawer from "./Drawer";
import StoreForm from "./Forms/StoreForm";
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";

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
function UserPassword({ user, password }) {
  const [show, setShow] = useState(false);
  return (
    <InputGroup>
      <Flex direction="row" justify="center" gap="15px">
        <Box
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Text fontSize="md" fontWeight="600">
            {user}
          </Text>
          <Input
            type={show ? "text" : "password"}
            fontSize="xs"
            color="gray.900"
            value={password}
            readOnly // Ensure the input is read-only
            variant="unstyled" // Remove default styling
            userSelect="none"
            px="20px"
          />
        </Box>
        <Box>
          <IconButton
            zIndex="5000"
            icon={show ? <FaEyeSlash /> : <FaEye />}
            onClick={(e) => {
              e.stopPropagation();
              setShow((s) => !s);
            }}
          />
        </Box>
      </Flex>
    </InputGroup>
  );
}

function CreatedModified({ author, date }) {
  dayjs.locale(ja);
  const formattedDate = dayjs(date).format("YYYY年 MMM D日 (dd)");

  return (
    <Flex direction="column">
      <Text noOfLines={1} fontSize="sm" fontWeight="700" color="gray.400">
        {author}
      </Text>
      <Text noOfLines={1} fontSize="xs" color="gray.500">
        {formattedDate}
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
        w="20px"
        h="20px"
        opacity={0.8}
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
    id: "hqCd",
    header: "本部コード", // puede ser una función
    accessorKey: "hqCd",
    cell: ({
      row: {
        original: { hqCd },
      },
    }) => {
      // Note: props puede aceptar: table, column, row, cell, getValue, renderValue
      return <StandardText text={hqCd} />;
    },
  },
  {
    id: "hqName",
    header: "本部名",
    accessorKey: "hqName",
    cell: ({
      row: {
        original: { hqName },
      },
    }) => {
      // Note: props puede aceptar: table, column, row, cell, getValue, renderValue
      return <StandardText text={hqName} />;
    },
  },
  {
    id: "email",
    header: "メール",
    accessorKey: "email",
    cell: ({
      row: {
        original: { email },
      },
    }) => {
      // Note: props puede aceptar: table, column, row, cell, getValue, renderValue
      return <StandardText text={email} />;
    },
  },
  {
    id: "createdAt",
    header: "登録情報",
    accessorKey: "createdAt",
    cell: ({
      row: {
        original: { createdBy, createdAt },
      },
    }) => <CreatedModified author={createdBy} date={createdAt} />,
  },
  {
    id: "modifiedAt",
    header: "更新情報",
    accessorKey: "modifiedAt",
    cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <CreatedModified author={modifiedBy} date={modifiedAt} />,
  },
  {
    id: "disabled",
    header: "状態",
    accessorKey: "disabled",
    cell: ({ value }) => <DisabledStatus isDisabled={value} />,
  },
];

export const storesColumnsDefinition = [
  {
    id: "hqCd",
    header: "本部コード",
    accessorKey: "hqCd",
    cell: ({
      row: {
        original: { hqCd },
      },
    }) => <StandardText text={hqCd} />,
  },
  {
    id: "hqName",
    header: "本部名",
    accessorKey: "hqName",
    cell: ({
      row: {
        original: { hqName },
      },
    }) => <StandardText text={hqName} />,
  },
  {
    id: "storeCd",
    Header: "店舗コード",
    accessor: "storeCd",
    cell: ({
      row: {
        original: { storeCd },
      },
    }) => <StandardText text={storeCd} />,
  },
  {
    id: "storeName",
    header: "店舗名",
    accessorKey: "storeName",
    cell: ({
      row: {
        original: { storeName },
      },
    }) => <StandardText text={storeName} />,
  },
  {
    id: "email",
    header: "メール",
    accessorKey: "email",
    cell: ({
      row: {
        original: { email },
      },
    }) => <StandardText text={email} />,
  },
  // {
  //   id: "ftpUser",
  //   header: "FTP情報",
  //   accessorKey: "ftpUser",
  //   cell: ({
  //     row: {
  //       original: { ftpUser, ftpPass },
  //     },
  //   }) => {
  //     return <UserPassword user={ftpUser} password={ftpPass} />;
  //   },
  // },
  {
    id: "createdBy",
    header: "登録情報",
    accessorKey: "createdBy",
    cell: ({
      row: {
        original: { createdBy, createdAt },
      },
    }) => <CreatedModified author={createdBy} date={createdAt} />,
  },
  {
    id: "modifiedBy",
    header: "更新情報",
    accessorKey: "modifiedBy",
    cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <CreatedModified author={modifiedBy} date={modifiedAt} />,
  },
  {
    id: "disabled",
    header: "状態",
    accessorKey: "disabled",
    cell: ({ row: { original: disabled } }) => (
      <DisabledStatus isDisabled={disabled} />
    ),
  },
];

export const usersColumnsDefinition = [
  {
    id: "userId",
    header: "ユーザID",
    accessorKey: "userId",
    cell: ({
      row: {
        original: { userId },
      },
    }) => <StandardText text={userId} />,
  },
  {
    id: "userName",
    header: "ユーザ名",
    accessorKey: "userName",
    cell: ({
      row: {
        original: { userName },
      },
    }) => <StandardText text={userName} />,
  },
  {
    id: "loginId",
    header: "ログインID",
    accessorKey: "loginId",
    cell: ({
      row: {
        original: { loginId },
      },
    }) => <StandardText text={loginId} />,
  },
  {
    id: "note",
    header: "備考",
    accessorKey: "note",
    cell: ({
      row: {
        original: { note },
      },
    }) => <Text noOfLines={1}>{note}</Text>,
  },
  {
    id: "email",
    header: "メール",
    accessorKey: "email",
    cell: ({
      row: {
        original: { email },
      },
    }) => <StandardText text={email} />,
  },
  {
    id: "createdBy",
    header: "登録情報",
    accessorKey: "createdBy",
    cell: ({
      row: {
        original: { createdBy, createdAt },
      },
    }) => <CreatedModified author={createdBy} date={createdAt} />,
  },
  {
    id: "modifiedBy",
    header: "更新情報",
    accessorKey: "modifiedBy",
    cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <CreatedModified author={modifiedBy} date={modifiedAt} />,
  },
  {
    id: "disabled",
    header: "状態",
    accessorKey: "disabled",
    cell: ({
      row: {
        original: { disabled },
      },
    }) => <DisabledStatus isDisabled={disabled} />,
  },
];

export const servicesColumnsDefinition = [
  {
    id: "serviceId",
    header: "サービスID名",
    accessorKey: "serviceId",
    cell: ({
      row: {
        original: { serviceId },
      },
    }) => <StandardText text={serviceId} />,
  },
  {
    id: "serviceName",
    header: "サービス名",
    accessorKey: "serviceName",
    cell: ({
      row: {
        original: { serviceName },
      },
    }) => {
      return <StandardText text={serviceName} />;
    },
  },
  {
    id: "createdBy",
    header: "登録情報",
    accessorKey: "createdBy",
    cell: ({
      row: {
        original: { createdBy, createdAt },
      },
    }) => <CreatedModified author={createdBy} date={createdAt} />,
  },
  {
    id: "modifiedBy",
    header: "更新情報",
    accessorKey: "modifiedBy",
    cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <CreatedModified author={modifiedBy} date={modifiedAt} />,
  },
  {
    header: "状態",
    accessorKey: "disabled",
    cell: ({ value }) => <DisabledStatus isDisabled={value} />,
  },
];

// TODO Investigar que onda con el filtrado de las páginas
// TODO Crear una barra de búsqueda para buscar por cada tabla.
