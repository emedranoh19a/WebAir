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
import AirHeadquarter from "views/admin/AirHeadquarter";
// import AirHeadquarter from "views/admin/AirHeadquarter";
// Info: If it contained as an item: Goes to the Sidebar: Pages that are protected go here.
//Pages that are not protected are defined separately
// Info: If it is subcontained in the item, is a specific route. also protected

const routes = [
  {
    name: "本部",
    layout: "admin", //maybe this is unnecessary
    path: "headquarters",
    icon: <Icon as={MdFactory} width="20px" height="20px" color="inherit" />,
    component: <AirHeadquarters />,
    children: [
      {
        name: "本部詳細",
        path: "/headquarters/:hqCd",
        component: <AirHeadquarter />,
      },
    ],
  },
  {
    name: "店舗",

    path: "stores",
    icon: <Icon as={FaStoreAlt} width="20px" height="20px" color="inherit" />,
    component: <AirStores />,
    // collapse: "aaa",
    children: [
      {
        name: "店舗a",
        path: "/stores/:storeCd",
        component: MainDashboard,
      },
    ],
  },

  {
    name: "ユーザー",
    layout: "/admin",
    path: "users",
    icon: <Icon as={FaUsers} width="20px" height="20px" color="inherit" />,
    component: <h1>I am the Users page</h1>,
  },
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  //items, categories are optional, but must be together.
  //items contains an array of more routes
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: SignInCentered,
  // },
];

export default routes;
