import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GrAdd from "react-icons/gr";
import * as GrBasket from "react-icons/gr";
import * as GrCart from "react-icons/gr";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <GrCart.GrCart />,

    subNav: [
      {
        title: "List",
        path: "/about-us/aim",
        icon: <GrBasket.GrBasket />,
      },
      {
        title: "Create a List",
        path: "/about-us/vision",
        icon: <GrAdd.GrAdd />,
      },
    ],
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
