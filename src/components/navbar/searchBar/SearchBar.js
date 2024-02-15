import React, { useState } from "react";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

// TODO Modificar el url del sitio, agregando unos search params.

function useStyles() {
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");
  return { searchIconColor, inputBg, inputText };
}

export function SearchBar({
  variant,
  background,
  children,
  placeholder,
  borderRadius,
}) {
  // Chakra Color Mode
  const { searchIconColor, inputBg, inputText } = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  //TODO get rid of the console log.

  const iconButtonStyles = {
    bg: "inherit",
    borderRadius: "inherit",
    _hover: "none",
    _active: {
      bg: "inherit",
      transform: "none",
      borderColor: "transparent",
    },
    _focus: {
      boxShadow: "none",
    },
  };
  const inputGroupStyles = {
    w: { base: "100%", md: "200px" },
    mb: "unset",
    me: "10px",
  };
  return (
    <InputGroup {...inputGroupStyles}>
      <InputLeftElement
        children={
          <IconButton
            icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
            {...iconButtonStyles}
            onClick={() => {
              // TODO mandar texto desde aquí al URL
              console.log("We are sending to the URL: " + searchQuery);
            }}
          />
        }
      />
      <Input
        variant="search"
        fontSize="sm"
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight="500"
        _placeholder={{ color: "gray.400", fontSize: "14px" }}
        borderRadius={borderRadius ? borderRadius : "30px"}
        placeholder={placeholder ? placeholder : "検索..."}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
    </InputGroup>
  );
}
