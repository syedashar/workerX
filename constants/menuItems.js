import {
  DOCUMENT_ICON,
  FEATURE_SVG,
  HOME_SVG,
  INDUSTRY_SVG,
  PRICING_SVG,
  RESOURCES_SVG,
  TOOLS_ICON,
} from "assets/svgs";

const menuItems = [
  {
    id: "1",
    title: "Home",
    href: "/",
    icon: HOME_SVG,
  },
  {
    id: "2",
    title: "Features",
    href: "/features",
    icon: FEATURE_SVG,
  },
  {
    id: "3",
    title: "Industries",
    href: "/industries",
    icon: INDUSTRY_SVG,
  },
  {
    id: "4",
    title: "Pricing",
    href: "/pricing",
    icon: PRICING_SVG,
  },
  {
    id: "5",
    title: "Resources",
    href: "",
    icon: RESOURCES_SVG,
    subMenu: [
      {
        id: "5-1",
        title: "Blog",
        href: "/resources/blogs",
        description: "Read all the Blogs",
        icon: DOCUMENT_ICON,
      },
      // {
      //   id: "5-2",
      //   title: "Tools",
      //   href: "/resources/tools",
      //   description: "See all the tools",
      //   icon: TOOLS_ICON,
      // },
    ],
  },
];

export default menuItems;
