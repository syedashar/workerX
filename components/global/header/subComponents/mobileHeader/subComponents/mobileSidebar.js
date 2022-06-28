import React, { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowDimensions } from "hooks";
import menuItems from "constants/menuItems";
import Link from "next/link";
import { Button } from "components/global";
import {
  linkVariant,
  sidebarVariant,
  linkWrapperVariant,
} from "animation/sidebarVariants";
import { useRouter } from "next/router";
import { ARROW_DOWN, CROSS_SVG } from "assets/svgs";

const MobileSidebar = forwardRef(function ForwadedRef(
  { isSidebarOpen, closeSidebar, trialButtonOnClick },
  ref
) {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const getExpansionSize = () => {
    if (width < 426) {
      return "0";
    } else if (width < 700 && width > 426) {
      return "30%";
    } else {
      return "50%";
    }
  };

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          ref={ref}
          initial={"hidden"}
          animate={"show"}
          exit={"exit"}
          layout
          custom={getExpansionSize()}
          variants={sidebarVariant}
          transition={{ duration: 1, ease: "anticipate" }}
          className={`${"sidebar"} ${"isSidebarOpen" ? "open_sidebar" : ""}`}
        >
          <div className={"header_wrapper"}>
            <span className={"sidebar_title"}></span>
            <span className="sidebar_cross_icon" onClick={closeSidebar}>
              {CROSS_SVG}
            </span>
          </div>

          <div className={"sidebar_inner_content"}>
            <motion.div
              variants={linkWrapperVariant}
              className={`links_wrapper`}
            >
              {menuItems.map((item) => (
                <MenuItem {...item} key={item.id} closeSidebar={closeSidebar} />
              ))}
            </motion.div>

            <Button
              type="secondary"
              title="Start free trial"
              style={{ marginTop: "auto" }}
              onClick={trialButtonOnClick}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

const IconLink = ({
  title,
  href,
  subMenu,
  icon,
  closeSidebar,
  isOpened,
  onToggle,
}) => {
  return (
    // ${isActive(href, subMenu) ? "active" : ""}
    <span className={`link_wrapper`}>
      <span className="link_icon">{icon}</span>
      <Link href={href} passHref>
        <motion.a
          variants={linkVariant}
          onClick={closeSidebar}
          className={"link"}
        >
          {title}
        </motion.a>
      </Link>
      {subMenu && (
        <span
          onClick={onToggle}
          className={`arrow_black ${isOpened ? "up" : "down"}`}
        >
          {ARROW_DOWN}
        </span>
      )}
    </span>
  );
};

const MenuItem = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleSubMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <IconLink {...props} isOpened={isOpened} onToggle={toggleSubMenu} />
      {props.subMenu && (
        <AnimatePresence>
          {isOpened && (
            <motion.div
              className="sub_menu"
              variants={linkWrapperVariant}
              custom={0}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {props.subMenu.map((item) => (
                <MenuItem
                  {...item}
                  key={item.id}
                  closeSidebar={props.closeSidebar}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default MobileSidebar;
