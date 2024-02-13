import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  // MdBarChart,
  // MdPerson,
  // MdHome,
  // MdLock,
  // MdOutlineShoppingCart,
  MdFactory,
} from "react-icons/md";

import { FaStoreAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import MainDashboard from "views/admin/default";
// import NFTMarketplace from "views/admin/marketplace";
// import Profile from "views/admin/profile";
// import DataTables from "views/admin/dataTables";

// Auth Imports
// import SignInCentered from "views/auth/signIn";
import AirStores from "pages/AirStores/AirStores";
import AirStore from "pages/AirStore/AirStore";
import AirHeadquarter from "pages/AirHeadquarter/AirHeadquarter";
import AirHeadquarters from "pages/AirHeadquarters/AirHeadquarters";
import AirUser from "pages/AirUser/AirUser";
import AirUsers from "pages/AirUsers/AirUsers";
import AirServices from "pages/AirServices/AirServices";
import AirService from "pages/AirService/AirService";
import AirSettings from "pages/AirSettings/AirSettings";

// import AirHeadquarter from "views/admin/AirHeadquarter";
// Info: If it contained as an item: Goes to the Sidebar: Pages that are protected go here.
//Pages that are not protected are defined separately
// Info: If it is subcontained in the item, is a specific route. also protected, but they are not
//rendered inside the drawer

const routes = [
  {
    name: "本部",
    path: "headquarters",
    icon: <Icon as={MdFactory} width="20px" height="20px" color="inherit" />,
    component: <AirHeadquarters />,
    children: [
      {
        name: "本部詳細",
        path: "headquarters/:hqCd",
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
        name: "店舗詳細",
        path: "stores/:storeCd",
        // component: <MainDashboard />,
        component: <AirStore />,
      },
    ],
  },

  {
    name: "ユーザー",
    path: "users",
    icon: <Icon as={FaUsers} width="20px" height="20px" color="inherit" />,
    component: <AirUsers />,
    children: [{ name: "", path: "users/:userId", component: <AirUser /> }],
  },
  {
    name: "サービス",
    path: "services",
    icon: <Icon as={FaUsers} width="20px" height="20px" color="inherit" />,
    component: <AirServices />,
    children: [
      { name: "", path: "users/:serviceId", component: <AirServices /> },
    ],
  },

  // import AirServices from "pages/AirServices/AirServices";
  // import AirService from "pages/AirService/AirService";
  // import AirSettings from "pages/AirSettings/AirSettings";
  // {
  //   name: "Main Dashboard",
  //   layout: "/admin",
  //   path: "default",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <MainDashboard />,
  // },
  //items, categories are optional, but must be together.
  //items contains an array of more routes
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width="20px"
  //       height="20px"
  //       color="inherit"
  //     />
  //   ),
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: <Profile />,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: SignInCentered,
  // },
];

export default routes;
