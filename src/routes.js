import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdFactory,
} from "react-icons/md";

import { FaStoreAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import AirStores from "views/admin/AirStores";
import AirHeadquarters from "views/admin/AirHeadquarters";
// import AirHeadquarter from "views/admin/AirHeadquarter";
const routes = [
  {
    name: "本部",
    layout: "/admin",
    path: "/headquarters",
    icon: <Icon as={MdFactory} width="20px" height="20px" color="inherit" />,
    component: AirHeadquarters,
  },
  // {
  //   name: "本部詳細",
  //   layout: "/admin",
  //   path: "/headquarters/:hqId",
  //   icon: <Icon as={MdFactory} width="20px" height="20px" color="inherit" />,
  //   component: AirHeadquarter,
  // },
  {
    name: "店舗",
    layout: "/admin",
    path: "/stores",
    icon: <Icon as={FaStoreAlt} width="20px" height="20px" color="inherit" />,
    component: AirStores,
    // collapse: "aaa",
    items: [
      {
        name: "店舗a",
        layout: "/admin",
        path: "/stores/a",
        icon: (
          <Icon as={FaStoreAlt} width="20px" height="20px" color="inherit" />
        ),
        component: MainDashboard,
      },
    ],
  },

  {
    name: "ユーザー",
    layout: "/admin",
    path: "/users",
    icon: <Icon as={FaUsers} width="20px" height="20px" color="inherit" />,
    component: () => <h1>I am the Users page</h1>,
  },
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  //items, categories are optional, but must be together.
  //items contains an array of more routes
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
];

export default routes;
