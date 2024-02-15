// Chakra Imports
import {
  Box,
  // Breadcrumb,
  // BreadcrumbItem,
  // BreadcrumbLink,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import AdminNavbarLinks from "components/navbar/NavbarLinksAdmin";
import { useLocation, useParams } from "react-router-dom";
import routes from "routes";

function usePageTitle() {
  const { pathname } = useLocation();
  const params = useParams();
  const paramsNum = Object.entries(params).length;
  const pathElement = pathname.split("/")[1];
  //At this point, pathElement variable matches routers'

  let foundPage = routes.find((route) => {
    return route.path === pathElement;
  });
  // Second condition: If it has url parameters, it is a details page:
  if (paramsNum > 0 && foundPage.children) {
    foundPage = foundPage.children[0];
  }
  return foundPage.name || "";
}

function useNavbarStyles() {
  //scrolled, setScrolled, mainText, secondaryText, navBg
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = useColorModeValue("navy.700", "white");
  let secondaryText = useColorModeValue("gray.700", "white");
  let navbarBg = useColorModeValue(
    "rgba(244, 247, 254, 0.2)",
    "rgba(11,20,55,0.5)"
  );

  return { scrolled, mainText, secondaryText, navbarBg };
}

export default function AdminNavbar({
  onOpen,
  logoText,
  secondary,
  message,
  fixed,
  brandText,
}) {
  const { scrolled, mainText, navbarBg } = useNavbarStyles();
  const pageTitle = usePageTitle();
  //Styled components

  // function StyledBreadCrumb() {
  //   return (
  //     <Breadcrumb>
  //       {/* <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
  //         <BreadcrumbLink href="#" color={secondaryText}>
  //           ページ
  //         </BreadcrumbLink>
  //       </BreadcrumbItem> */}

  //       <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
  //         {/* //TODO averiguar una manera de extraer los links desde  Router.
  // 	   Con hijos y todo, dependiendo del location actual. Esa es la única responsabilidad de Breadcrumb*/}
  //         <BreadcrumbLink href="#" color={secondaryText}>
  //           {/* //TODO this brandText  is suspicious */}
  //           {brandText}
  //         </BreadcrumbLink>
  //       </BreadcrumbItem>
  //     </Breadcrumb>
  //   );
  // }
  function StyledTitle({ title }) {
    return (
      <Text
        color={mainText}
        // href="#"
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
        {title}
      </Text>
    );
  }

  const boxStyles = {
    position: "fixed",
    boxShadow: "none",
    bg: navbarBg,
    borderColor: "transparent",
    filter: "none",
    backdropFilter: "blur(20px)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "16px",
    borderWidth: "1.5px",
    borderStyle: "solid",
    transitionDelay: "0s, 0s, 0s, 0s",
    transitionDuration: "0.25s, 0.25s, 0.25s, 0s",
    transitionProperty: "box-shadow, background-color, filter, border",
    transitionTimingFunction: "linear, linear, linear, linear",
    alignItems: { xl: "center" },
    display: secondary ? "block" : "flex",
    minHeight: "75px",
    justifyContent: { xl: "center" },
    lineHeight: "25.6px",
    margin: "auto",
    marginTop: "0px",
    paddingBottom: "8px",
    right: { base: "12px", md: "30px", lg: "30px", xl: "30px" },
    paddingLeft: { sm: "15px", md: "10px" },
    paddingRight: { xl: "12px" },
    paddingTop: "8px",
    top: { base: "12px", md: "16px", lg: "20px", xl: "20px" },
    width: {
      base: "calc(100vw - 6%)",
      md: "calc(100vw - 8%)",
      lg: "calc(100vw - 6%)",
      xl: "calc(100vw - 350px)",
      "2xl": "calc(100vw - 365px)",
    },
  };

  return (
    <Box {...boxStyles}>
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
          {/* <StyledBreadCrumb /> */}
          {/* Here we create navbar brand, based on route name */}
          <StyledTitle title={pageTitle} />
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          {/* //TODO eliminar algunas cosas de por aquí */}
          {/* <AdminNavbarLinks
            onOpen={onOpen}
            logoText={logoText}
            secondary={secondary}
            fixed={fixed}
            scrolled={scrolled}
          /> */}
        </Box>
      </Flex>
      {/* //TODO what is this? */}
      {secondary ? <Text color="black">{message}</Text> : null}
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
