import { HAMBURGER_SVG } from "assets/svgs";

const HamburgerIcon = ({ onClick }) => {
  return (
    <div className="hamburger_icon" onClick={onClick}>
      {HAMBURGER_SVG}
    </div>
  );
};

export default HamburgerIcon;
