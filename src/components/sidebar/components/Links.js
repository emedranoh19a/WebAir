/* eslint-disable */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// chakra imports
import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";

function useSideBarLinkStyles() {
  let location = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");
  return {
    location,
    activeColor,
    inactiveColor,
    activeIcon,
    textColor,
    brandColor,
  };
}

export function SidebarLinks({ routes }) {
  //   Chakra color mode
  const {
    location,
    activeColor,
    inactiveColor,
    activeIcon,
    textColor,
    brandColor,
  } = useSideBarLinkStyles();

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname.includes(routeName);
  }
  function CategoryPartition({ routeTitle, routeChildren }) {
    return (
      <>
        {" "}
        <Text
          fontSize={"md"}
          color={activeColor}
          fontWeight="bold"
          mx="auto"
          ps={{
            sm: "10px",
            xl: "16px",
          }}
          pt="18px"
          pb="12px"
        >
          {routeTitle}
        </Text>
        {createLinks(routeChildren)}
      </>
    );
  }
  function NavLinkItem({ route }) {
    const { path, icon, name } = route;
    const ItemIcon = ({ icon, path }) => {
      return (
        <Box
          color={activeRoute(path.toLowerCase()) ? activeIcon : textColor}
          me="18px"
        >
          {icon}
        </Box>
      );
    };
    const ItemTitle = ({ path, name }) => {
      return (
        <Text
          me="auto"
          color={activeRoute(path.toLowerCase()) ? activeColor : textColor}
          fontWeight={activeRoute(path.toLowerCase()) ? "bold" : "normal"}
        >
          {name}
        </Text>
      );
    };
    const ItemIndicator = ({ path }) => {
      return (
        <Box
          h="36px"
          w="4px"
          bg={activeRoute(path.toLowerCase()) ? brandColor : "transparent"}
          borderRadius="5px"
        />
      );
    };

    return (
      <Box>
        <HStack
          spacing={activeRoute(path.toLowerCase()) ? "22px" : "26px"}
          py="5px"
          ps="10px"
        >
          <Flex w="100%" alignItems="center" justifyContent="center">
            <ItemIcon icon={icon} path={path} />
            <ItemTitle path={path} name={name} />
          </Flex>
          <ItemIndicator path={path} />
        </HStack>
      </Box>
    );
  }

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.category) {
        return (
          <CategoryPartition
            routeTitle={route.name}
            routeChildren={route.items}
            key={index}
          />
        );
        // } else if (
        //   route.layout === "/admin" ||
        //   route.layout === "/auth" ||
        //   route.layout === "/rtl"
        // ) {
      }
      return (
        //todo Active link is styled only if the layout is specified.
        // <NavLink key={index} to={route.layout + route.path}>
        <NavLink key={index} to={route.path}>
          <NavLinkItem route={route} />
        </NavLink>
      );
    });
  };
  return createLinks(routes);
}
//  BRAND

export default SidebarLinks;
