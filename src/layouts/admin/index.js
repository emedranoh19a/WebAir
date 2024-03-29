// Chakra imports
import {
  Portal,
  Box,
  useDisclosure,
  // Text,
  // Button,
  // Link,
} from "@chakra-ui/react";
import Footer from "components/footer/FooterAdmin.js";
// Layout components
import Navbar from "components/navbar/NavbarAdmin.js";
import Sidebar from "components/sidebar/Sidebar.js";
import { SidebarContext } from "contexts/SidebarContext";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import { Redirect, Route, Switch } from "react-router-dom";
//Note: This is used if want to create routes dinamically
// import { CompatRoute } from "react-router-dom-v5-compat";
import routes from "routes.js";
// import AirHeadquarters from "views/admin/AirHeadquarters";

// Custom Chakra theme
// Info: Admin layout. This is rendered in the index.js (inside a router)
export default function AppLayout() {
  // const { children, ...rest } = props;

  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  // function getRoute() {
  //   //TODO we have to tackle here, since we are not using layouts.
  //   return window.location.pathname !== "/admin/full-screen-maps";
  // }
  // const location = useLocation();
  // const [activeRoute, setActiveRoute] = useState("Default Brand Text");

  // useEffect(() => {
  //   const pathname = location.pathname;
  //   const matchingRoute = routes.find((route) => {
  //     if (route.children) {
  //       return route.children.some((child) =>
  //         pathname.startsWith(route.path + child.path)
  //       );
  //     } else {
  //       return pathname.startsWith(route.path);
  //     }
  //   });

  //   if (matchingRoute) {
  //     setActiveRoute(matchingRoute.name);
  //   } else {
  //     setActiveRoute("Default Brand Text");
  //   }
  // }, [location.pathname]);

  function getActiveRoute(routes) {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  }
  function getActiveNavbar(routes) {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbar(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].secondary;
        }
      }
    }
    return activeNavbar;
  }
  function getActiveNavbarText(routes) {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveNavbar = getActiveNavbarText(routes[i].items);
        if (collapseActiveNavbar !== activeNavbar) {
          return collapseActiveNavbar;
        }
      } else if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbarText(routes[i].items);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].messageNavbar;
        }
      }
    }
    return activeNavbar;
  }
  document.documentElement.dir = "ltr";
  const { onOpen } = useDisclosure();
  document.documentElement.dir = "ltr";

  return (
    <Box>
      <Box>
        <SidebarContext.Provider
          value={{
            toggleSidebar,
            setToggleSidebar,
          }}
        >
          <Sidebar routes={routes} />
          <Box
            float="right"
            minHeight="100vh"
            height="100%"
            overflow="auto"
            position="relative"
            maxHeight="100%"
            w={{ base: "100%", xl: "calc( 100% - 290px )" }}
            maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
            transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
            transitionDuration=".2s, .2s, .35s"
            transitionProperty="top, bottom, width"
            transitionTimingFunction="linear, linear, ease"
          >
            <Portal>
              <Box>
                <Navbar
                  onOpen={onOpen}
                  logoText={"Web Air"}
                  brandText={getActiveRoute(routes)}
                  secondary={getActiveNavbar(routes)}
                  message={getActiveNavbarText(routes)}
                  // message={activeRoute}
                  fixed={fixed}
                />
              </Box>
            </Portal>

            <Box
              mx="auto"
              p={{ base: "20px", md: "30px" }}
              pe="20px"
              minH="100vh"
              pt="50px"
            >
              <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
                <Outlet />
              </Box>
            </Box>

            <Box>
              <Footer />
            </Box>
          </Box>
        </SidebarContext.Provider>
      </Box>
    </Box>
  );
}
