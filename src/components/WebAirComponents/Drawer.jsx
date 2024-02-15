import {
  cloneElement,
  //   cloneElement,
  createContext,
  useContext,
  useRef,
  //   useState,
} from "react";
// import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

// import { useOutsideClick  from "../hooks/useOutsideClick";
import {
  Button,
  Drawer as ChakraDrawer,
  DrawerBody as ChakraDrawerBody,
  DrawerCloseButton as ChakraDrawerCloseButton,
  DrawerContent as ChakraDrawerContent,
  DrawerFooter as ChakraDrawerFooter,
  DrawerHeader as ChakraDrawerHeader,
  DrawerOverlay as ChakraDrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

// TODO make the drawer a compound component.
// TODO Maybe we don't need styles for the drawer. Plus, it is chakra UI
// TODO add maybe a close button at the top

const DrawerContext = createContext();
//TODO El boton abre algo.
//TODO ese algo tiene hijos.

function Open({ children }) {
  const { onOpen } = useContext(DrawerContext);
  return cloneElement(children, { onClick: onOpen });
}
function Paper({ children, title = "" }) {
  const { onClose, isOpen, btnRef } = useContext(DrawerContext);
  return (
    <ChakraDrawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <ChakraDrawerOverlay />
      <ChakraDrawerContent>
        <ChakraDrawerCloseButton />
        <ChakraDrawerHeader>{title}</ChakraDrawerHeader>
        <ChakraDrawerBody>
          {/* <Input placeholder="Type here..." /> */}
          {children}
        </ChakraDrawerBody>

        <ChakraDrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            キャンセル
          </Button>
          <Button variant="brand">確認</Button>
        </ChakraDrawerFooter>
      </ChakraDrawerContent>
    </ChakraDrawer>
  );
}
function Drawer({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <DrawerContext.Provider value={{ isOpen, onOpen, onClose, btnRef }}>
      {children}
    </DrawerContext.Provider>
  );
}
Drawer.Open = Open;
Drawer.Paper = Paper;

export default Drawer;
