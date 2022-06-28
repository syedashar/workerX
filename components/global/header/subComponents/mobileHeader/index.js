import { useOnClickOutside } from "hooks";
import React, { useState, useRef, useEffect } from "react";
import { HamburgerIcon, MobileSidebar } from "./subComponents";

const MobileHeader = ({ isWhite, isPageTop, trialButtonOnClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  let toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useOnClickOutside(sidebarRef, closeSidebar);

  return (
    <>
      <header
        className={`header  ${isWhite ? "white" : ""} ${
          isPageTop ? "page_top" : ""
        }`}
      >
        <div className={"header_wrapper"}>
          <div className={"company_logo"} />
          <HamburgerIcon onClick={toggleSidebar} />
        </div>
      </header>
      <MobileSidebar
        ref={sidebarRef}
        closeSidebar={closeSidebar}
        isSidebarOpen={isSidebarOpen}
        trialButtonOnClick={trialButtonOnClick}
      />
    </>
  );
};

export default MobileHeader;
