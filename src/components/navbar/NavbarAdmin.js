// Chakra Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import AdminNavbarLinks from "components/navbar/NavbarLinksAdmin";

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });
  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue("navy.700", "white");
  let secondaryText = useColorModeValue("gray.700", "white");
  let navbarBg = useColorModeValue(
    "rgba(244, 247, 254, 0.2)",
    "rgba(11,20,55,0.5)"
  );
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  //Brand text: Pages title
  const { secondary, message, brandText } = props;

  function StyledNavbar({ children }) {
    return (
      <Box
        position="fixed"
        boxShadow="none"
        bg={navbarBg}
        borderColor="transparent"
        filter="none"
        backdropFilter="blur(20px)"
        backgroundPosition="center"
        backgroundSize="cover"
        borderRadius="16px"
        borderWidth="1.5px"
        borderStyle="solid"
        transitionDelay="0s, 0s, 0s, 0s"
        transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
        transitionProperty="box-shadow, background-color, filter, border"
        transitionTimingFunction="linear, linear, linear, linear"
        alignItems={{ xl: "center" }}
        display={secondary ? "block" : "flex"}
        minH="75px"
        justifyContent={{ xl: "center" }}
        lineHeight="25.6px"
        mx="auto"
        mt="0px"
        pb="8px"
        right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
        px={{
          sm: "15px",
          md: "10px",
        }}
        ps={{
          xl: "12px",
        }}
        pt="8px"
        top={{ base: "12px", md: "16px", lg: "20px", xl: "20px" }}
        w={{
          base: "calc(100vw - 6%)",
          md: "calc(100vw - 8%)",
          lg: "calc(100vw - 6%)",
          xl: "calc(100vw - 350px)",
          "2xl": "calc(100vw - 365px)",
        }}
      >
        {children}
      </Box>
    );
  }

  function StyledBreadCrumb() {
    return (
      <Breadcrumb>
        {/* <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
          <BreadcrumbLink href="#" color={secondaryText}>
            ページ
          </BreadcrumbLink>
        </BreadcrumbItem> */}

        <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
          {/* //TODO averiguar una manera de extraer los links desde React Router.
		   Con hijos y todo, dependiendo del location actual. Esa es la única responsabilidad de Breadcrumb*/}
          <BreadcrumbLink href="#" color={secondaryText}>
            {brandText}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
  function StyledTitle({ children }) {
    return (
      <Link
        color={mainText}
        href="#"
        bg="inherit"
        borderRadius="inherit"
        fontWeight="bold"
        fontSize="34px"
        _hover={{ color: { mainText } }}
        _active={{
          bg: "inherit",
          transform: "none",
          borderColor: "transparent",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <StyledNavbar>
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        mb="0px"
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <StyledBreadCrumb />
          {/* Here we create navbar brand, based on route name */}
          <StyledTitle>{brandText}</StyledTitle>
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          {/* //TODO eliminar algunas cosas de por aquí */}
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
            scrolled={scrolled}
          />
        </Box>
      </Flex>
      {/* //TODO what is this? */}
      {secondary ? <Text color="black">{message}</Text> : null}
    </StyledNavbar>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
