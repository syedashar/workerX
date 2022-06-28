import Button from "components/global/button";
import menuItems from "constants/menuItems";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  subMenuItemVariant,
  subMenuVariant,
  menuLinkWrapperVariant,
} from "animation/subMenuVariants";
import { ARROW_DOWN } from "assets/svgs";
import { useRouter } from "next/router";

const DefaultHeader = ({ isWhite, isPageTop, trialButtonOnClick }) => {
  const router = useRouter();

  const isActive = (href, subMenu) => {
    if (href === "") {
      return subMenu.some((item) => router.asPath === item.href)
        ? "active"
        : "";
    }

    return router.asPath === href ? "active" : "";
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header
      className={`header  ${isWhite ? "white" : ""} ${
        isPageTop ? "page_top" : ""
      }`}
    >
      <div className={"header_wrapper"}>
        <div className={"company_logo"} onClick={handleLogoClick} />
        <div className={`navlinks_wrapper`}>
          {menuItems.map(({ id, title, href, subMenu }) => (
            <motion.span
              whileHover={"visible"}
              initial="hidden"
              animate="hidden"
              variants={menuLinkWrapperVariant}
              key={id}
              className={`link_wrapper ${isActive(href, subMenu)}`}
            >
              <Link href={href}>{title}</Link>
              {subMenu && (
                <>
                  {ARROW_DOWN} <SubMenu subMenu={subMenu} />
                </>
              )}
            </motion.span>
          ))}
        </div>
        <Button
          title="Start Free Trial"
          onClick={trialButtonOnClick}
          type={isWhite ? "secondary" : "default"}
        />
      </div>
    </header>
  );
};

const SubMenu = ({ subMenu }) => {
  const router = useRouter();

  const handleSubmenuClick = (href) => {
    router.push(href);
  };

  return (
    <motion.div className="submenu_wrapper" layout variants={subMenuVariant}>
      {subMenu.map((item) => (
        <motion.div
          variants={subMenuItemVariant}
          className="submenu_link_wrapper"
          key={item.id}
          onClick={() => handleSubmenuClick(item.href)}
        >
          <div className="submenu_link_icon">{item.icon}</div>
          <div className="submenu_link_texts_wrapper">
            <span className="title">{item.title}</span>
            <span className="subtle_desc">{item.description}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DefaultHeader;
