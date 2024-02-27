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
    Header: "本部コード",
    accessor: "hqCd",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "本部名",
    accessor: "hqName",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "メール",
    accessor: "email",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "登録情報",
    accessor: "createdAt",
    Cell: ({
      row: {
        original: { createdBy, createdAt },
      },
    }) => <CreatedModified author={createdBy} date={createdAt} />,
  },
  {
    Header: "更新情報",
    accessor: "modifiedAt",
    Cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <CreatedModified author={modifiedBy} date={modifiedAt} />,
  },
  {
    Header: "状態",
    accesor: "disabled",
    Cell: ({ value }) => <DisabledStatus isDisabled={value} />,
  },
];

export const storesColumnsDefinition = [
  {
    Header: "本部コード",
    accessor: "hqCd",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "本部名",
    accessor: "hqName",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "店舗コード",
    accessor: "storeCd",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "店舗名",
    accessor: "storeName",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "メール",
    accessor: "email",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "FTP情報",
    accessor: "ftpUser",
    Cell: ({
      row: {
        original: { ftpUser, ftpPass },
      },
    }) => {
      return <UserPassword user={ftpUser} password={ftpPass} />;
    },
  },
  {
    Header: "登録情報",
    accessor: "createdBy",
    Cell: ({
      row: {
        original: { createdBy, createdAt },
      },
    }) => <CreatedModified author={createdBy} date={createdAt} />,
  },
  {
    Header: "更新情報",
    accessor: "modifiedBy",
    Cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <CreatedModified author={modifiedBy} date={modifiedAt} />,
  },
  {
    Header: "状態",
    accesor: "disabled",
    Cell: ({ value }) => <DisabledStatus isDisabled={value} />,
  },
];

export const usersColumnsDefinition = [
  {
    Header: "ユーザID",
    accessor: "userId",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "ユーザ名",
    accessor: "userName",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "ログインID",
    accessor: "loginId",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "備考",
    accessor: "note",
    Cell: ({ value }) => <Text noOfLines={1}>{value}</Text>,
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
    }) => <CreatedModified author={createdBy} date={createdAt} />,
  },
  {
    Header: "更新情報",
    accessor: "modifiedBy",
    Cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <CreatedModified author={modifiedBy} date={modifiedAt} />,
  },
  {
    Header: "状態",
    accesor: "disabled",
    Cell: ({ value }) => <DisabledStatus isDisabled={value} />,
  },
];

export const servicesColumnsDefinition = [
  {
    Header: "サービスID名",
    accessor: "serviceId",
    Cell: ({ value }) => <StandardText text={value} />,
  },
  {
    Header: "サービス名",
    accessor: "serviceName",
    Cell: ({ value }) => {
      return <StandardText text={value} />;
    },
  },
  {
    Header: "登録情報",
    accessor: "createdBy",
    Cell: ({
      row: {
        original: { createdBy, createdAt },
      },
    }) => <CreatedModified author={createdBy} date={createdAt} />,
  },
  {
    Header: "更新情報",
    accessor: "modifiedBy",
    Cell: ({
      row: {
        original: { modifiedBy, modifiedAt },
      },
    }) => <CreatedModified author={modifiedBy} date={modifiedAt} />,
  },
  {
    Header: "状態",
    accesor: "disabled",
    Cell: ({ value }) => <DisabledStatus isDisabled={value} />,
  },
];

// TODO Hacer la definición de columnas de wsUsers

// TODO Investigar que onda con el filtrado de las páginas
// TODO Crear una barra de búsqueda para buscar por cada tabla.
