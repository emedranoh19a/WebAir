/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useRef, useState } from "react";

// Chakra imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  // Button,
  Flex,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure,
  // Link,
  // Text,
  // useColorModeValue,
  // SimpleGrid,
} from "@chakra-ui/react";
// import { SearchBar } from "components/navbar/searchBar/SearchBar";
// import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";

// import Card from "components/card/Card.js";

// import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
// import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

import AllHeadquartersTable from "./components/AllHeadquartersTable";

//TODO mientras puedes hacer tus propios componentes, en base a lo que ya tienes.
// Una mejor organización de dará desyunar perdedores.
//TODO Descomponer la 4c olumn table, y hacerla de 3 o 2!
//TODO Lo correcto, es hacer una sola página de.

// const inlineLinks = [
//   { link: "#art", label: "Art" },
//   { link: "#music", label: "Music" },
//   { link: "#collectibles", label: "Collectibles" },
//   { link: "#sports", label: "Sports" },
// ];

// Info:Displays page of all the headquarters

// Note: 本部の共通オブジェクト:
// hqCd, hqName, email, disabled, createdBy, createdAt, modifiedBy, mmodifiedAt.
//TODO : general layout: Search, pagination table with searchParams handler.

//TODO: un botón para navegar hacia atrás.
// TODO: Un drawer para añadir un nuevo headquarter: Debe ser una mutación. Verificar cómo funcionaba el isEditSession.

// function DrawerExample() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();

//   return (
//     <>
//       <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
//         Open
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Create your account</DrawerHeader>

//           <DrawerBody>
//             <Input placeholder="Type here..." />
//           </DrawerBody>

//           <DrawerFooter>
//             <Button variant="outline" mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="blue">Save</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

const CreateCampaign = (props) => {
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size="xs"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          Create a new account
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="username">Name</FormLabel>
              <Input id="username" placeholder="Please enter user name" />
            </Box>

            <Box>
              <FormLabel htmlFor="url">Url</FormLabel>
              <InputGroup>
                <InputLeftAddon>http://</InputLeftAddon>
                <Input type="url" id="url" placeholder="Please enter domain" />
                <InputRightAddon>.com</InputRightAddon>
              </InputGroup>
            </Box>

            <Box>
              <FormLabel htmlFor="owner">Select Owner</FormLabel>
              <Select id="owner" defaultValue="segun">
                <option value="segun">Segun Adebayo</option>
                <option value="kola">Kola Tioluwani</option>
              </Select>
            </Box>

            <Box>
              <FormLabel htmlFor="desc">Description</FormLabel>
              <Textarea id="desc" />
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default function AirHeadquarters() {
  // Chakra Color Mode
  // const textColor = useColorModeValue("secondaryGray.900", "white");
  // const textColorBrand = useColorModeValue("brand.500", "white");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const TableContainer = ({ children }) => (
    <Flex
      flexDirection="column"
      gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
    >
      <Flex direction="column">
        <Box w="100%">{children}</Box>
      </Flex>
    </Flex>
  );

  return (
    <>
      {/* TODO falta hacer un submit al presionar "Enter" */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <TableContainer>
          <AllHeadquartersTable />
        </TableContainer>

        <Flex justify="start" align="start">
          {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer> */}
          {/* <DrawerExample /> */}
          <button
            onClick={() => {
              onOpen();
            }}
          >
            {" "}
            Open the drawer
          </button>
          <CreateCampaign isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Flex>
      </Grid>
      {/* TODO Acerca del drawer:
      // TODO 1 hacer que se mueva el drawer
      // TODO hacerlo grandecillo
      // TODO Hacer un form en un componente aparte.
// TODO posicionar los botones y todo
//TODO verificar las validaciones antes de hacer click en el botón.

      */}
    </>
  );
}
