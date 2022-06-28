import { primaryColor } from "constants/theme";
import CALENDAR_SVG from "/public/svgs/calendar.svg";

const TICK_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17.021"
    height="12.406"
    viewBox="0 0 17.021 12.406"
  >
    <path
      id="Icon_feather-check"
      data-name="Icon feather-check"
      d="M18.778,9,9.993,17.785,6,13.792"
      transform="translate(-3.879 -6.879)"
      fill="none"
      stroke="#4bcc94"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>
);

const DOCUMENT_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17.874"
    height="21.448"
    viewBox="0 0 17.874 21.448"
  >
    <path
      id="document"
      d="M15.405,12.511a.894.894,0,0,1-.894.894H7.362a.894.894,0,1,1,0-1.787h7.149A.894.894,0,0,1,15.405,12.511ZM11.83,15.192H7.362a.894.894,0,1,0,0,1.787H11.83a.894.894,0,0,0,0-1.787ZM19.874,9.37v7.61a4.474,4.474,0,0,1-4.468,4.468H6.468A4.474,4.474,0,0,1,2,16.98V4.468A4.474,4.474,0,0,1,6.468,0H10.5a6.218,6.218,0,0,1,4.424,1.832l3.114,3.115A6.212,6.212,0,0,1,19.874,9.37ZM13.663,3.1a4.477,4.477,0,0,0-.939-.7V6.256a.894.894,0,0,0,.894.894h3.857a4.453,4.453,0,0,0-.7-.938ZM18.086,9.37c0-.147-.029-.289-.042-.433H13.618a2.681,2.681,0,0,1-2.681-2.681V1.829c-.145-.013-.287-.042-.433-.042H6.468A2.681,2.681,0,0,0,3.787,4.468V16.98a2.681,2.681,0,0,0,2.681,2.681h8.937a2.681,2.681,0,0,0,2.681-2.681Z"
      transform="translate(-2 0)"
      fill="#0058fb"
    />
  </svg>
);

const TOOLS_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.551"
    height="20.551"
    viewBox="0 0 20.551 20.551"
  >
    <path
      id="magic-wand"
      d="M15.473,7.786A2.619,2.619,0,0,0,14.7,5.927a2.7,2.7,0,0,0-3.723,0L.784,16.123a2.632,2.632,0,0,0,3.72,3.72l10.2-10.2a2.617,2.617,0,0,0,.773-1.862ZM3.289,18.631a.934.934,0,0,1-1.289,0,.912.912,0,0,1,0-1.289l6.674-6.675L9.967,11.96Zm10.2-10.2-2.309,2.31L9.89,9.449,12.2,7.14a.913.913,0,1,1,1.289,1.289Zm-9.3-5.98,1.331-.38L5.9.741a1.023,1.023,0,0,1,1.967,0l.38,1.331,1.331.38a1.023,1.023,0,0,1,0,1.967L8.246,4.8l-.38,1.331a1.023,1.023,0,0,1-1.967,0L5.52,4.8,4.188,4.42a1.023,1.023,0,0,1,0-1.967Zm15.7,12.276-1.331.38-.38,1.331a1.023,1.023,0,0,1-1.967,0l-.38-1.331-1.331-.38a1.023,1.023,0,0,1,0-1.967l1.331-.38.38-1.331a1.023,1.023,0,0,1,1.967,0l.38,1.331,1.331.38a1.023,1.023,0,0,1,0,1.967ZM15.263,2.148l1.165-.332L16.762.649a.9.9,0,0,1,1.718,0l.332,1.165,1.165.332a.9.9,0,0,1,0,1.718L18.812,4.2,18.48,5.364a.9.9,0,0,1-1.718,0L16.429,4.2l-1.167-.334a.9.9,0,0,1,0-1.718Z"
      transform="translate(-0.077 0)"
      fill="#0058fb"
    />
  </svg>
);

// arrow down svg

const ARROW_DOWN = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8.03"
    height="4.515"
    viewBox="0 0 8.03 4.515"
  >
    <path
      id="Icon_feather-chevron-down"
      data-name="Icon feather-chevron-down"
      d="M9,13.5l3.308,3.308L15.615,13.5"
      transform="translate(-8.293 -12.793)"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
    />
  </svg>
);
const HAMBURGER_SVG = (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="menu"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    className="hamburger"
  >
    <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
  </svg>
);

// cross svg

const CROSS_SVG = (
  <svg
    viewport="0 0 20 20"
    version="1.1"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="1" y1="20" x2="20" y2="1" stroke={primaryColor} strokeWidth="3" />
    <line x1="1" y1="1" x2="20" y2="20" stroke={primaryColor} strokeWidth="3" />
  </svg>
);

const BACK_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23.997"
    height="12.592"
    viewBox="0 0 23.997 12.592"
  >
    <path
      id="arrow-left"
      d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85a3,3,0,0,0,0,4.24Z"
      transform="translate(-0.003 -5.704)"
      fill="#fff"
    />
  </svg>
);

const HOME_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="23.986"
    viewBox="0 0 24 23.986"
  >
    <g id="Group_482" data-name="Group 482" transform="translate(-24 -127.507)">
      <path
        id="home"
        d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,1,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,1,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586a1.008,1.008,0,0,1,.293.7Z"
        transform="translate(24 127.486)"
        fill="#0058fb"
      />
      <line
        id="Line_52"
        data-name="Line 52"
        y1="4"
        transform="translate(36 144.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="1"
      />
    </g>
  </svg>
);

const FEATURE_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="24.003"
    viewBox="0 0 23 24.003"
  >
    <g id="Group_481" data-name="Group 481" transform="translate(-24.5 -188)">
      <path
        id="bulb_1_"
        data-name="bulb (1)"
        d="M17.994,2.286a9,9,0,0,0-12.126,13.3A6.263,6.263,0,0,1,8,20.149v.161A3.694,3.694,0,0,0,11.69,24h.62A3.694,3.694,0,0,0,16,20.31v-.549a5.323,5.323,0,0,1,1.932-4,8.994,8.994,0,0,0,.062-13.477ZM12.31,22h-.62A1.692,1.692,0,0,1,10,20.31s-.007-.26-.008-.31H14v.31A1.692,1.692,0,0,1,12.31,22Zm4.3-7.741A7.667,7.667,0,0,0,14.246,18H13V10.816A3,3,0,0,0,15,8a1,1,0,0,0-2,0,1,1,0,0,1-2,0A1,1,0,0,0,9,8a3,3,0,0,0,2,2.816V18H9.678A8.634,8.634,0,0,0,7.23,14.119,7,7,0,0,1,11.181,2.046,7.452,7.452,0,0,1,12.009,2a6.921,6.921,0,0,1,4.652,1.778,6.993,6.993,0,0,1-.048,10.481Z"
        transform="translate(24.003 188.003)"
        fill="#0058fb"
      />
      <line
        id="Line_49"
        data-name="Line 49"
        y1="4"
        transform="translate(36 191.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="1"
      />
      <line
        id="Line_50"
        data-name="Line 50"
        y1="4"
        transform="translate(47 194.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="1"
      />
      <line
        id="Line_51"
        data-name="Line 51"
        y1="4"
        transform="translate(25 194.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="1"
      />
    </g>
  </svg>
);

const INDUSTRY_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g id="Group_483" data-name="Group 483" transform="translate(-24 -249)">
      <rect
        id="Rectangle_211"
        data-name="Rectangle 211"
        width="3"
        height="2"
        rx="1"
        transform="translate(28 262)"
        fill="#c7daff"
      />
      <rect
        id="Rectangle_210"
        data-name="Rectangle 210"
        width="3"
        height="2"
        rx="1"
        transform="translate(33 262)"
        fill="#c7daff"
      />
      <path
        id="building_1_"
        data-name="building (1)"
        d="M7,14a1,1,0,0,1-1,1H5a1,1,0,0,1,0-2H6A1,1,0,0,1,7,14Zm4-1H10a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM6,17H5a1,1,0,0,0,0,2H6a1,1,0,0,0,0-2Zm5,0H10a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM6,5H5A1,1,0,0,0,5,7H6A1,1,0,0,0,6,5Zm5,0H10a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM6,9H5a1,1,0,0,0,0,2H6A1,1,0,0,0,6,9Zm5,0H10a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm13,1v9a5.006,5.006,0,0,1-5,5H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0h6a5.006,5.006,0,0,1,5,5h3a5.006,5.006,0,0,1,5,5ZM5,22h9V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3ZM22,10a3,3,0,0,0-3-3H16V22h3a3,3,0,0,0,3-3Zm-3,3a1,1,0,1,0,1,1A1,1,0,0,0,19,13Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,19,17Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,19,9Z"
        transform="translate(24 249)"
        fill="#0058fb"
      />
      <rect
        id="Rectangle_206"
        data-name="Rectangle 206"
        width="3"
        height="2"
        rx="1"
        transform="translate(28 254)"
        fill="#c7daff"
      />
      <rect
        id="Rectangle_209"
        data-name="Rectangle 209"
        width="3"
        height="2"
        rx="1"
        transform="translate(28 258)"
        fill="#c7daff"
      />
      <rect
        id="Rectangle_215"
        data-name="Rectangle 215"
        width="3"
        height="2"
        rx="1"
        transform="translate(28 266)"
        fill="#c7daff"
      />
      <rect
        id="Rectangle_207"
        data-name="Rectangle 207"
        width="3"
        height="2"
        rx="1"
        transform="translate(33 254)"
        fill="#c7daff"
      />
      <rect
        id="Rectangle_208"
        data-name="Rectangle 208"
        width="3"
        height="2"
        rx="1"
        transform="translate(33 258)"
        fill="#c7daff"
      />
      <rect
        id="Rectangle_214"
        data-name="Rectangle 214"
        width="3"
        height="2"
        rx="1"
        transform="translate(33 266)"
        fill="#c7daff"
      />
      <circle
        id="Ellipse_50"
        data-name="Ellipse 50"
        cx="1"
        cy="1"
        r="1"
        transform="translate(42 266)"
        fill="#c7daff"
      />
      <circle
        id="Ellipse_51"
        data-name="Ellipse 51"
        cx="1"
        cy="1"
        r="1"
        transform="translate(42 262)"
        fill="#c7daff"
      />
      <circle
        id="Ellipse_52"
        data-name="Ellipse 52"
        cx="1"
        cy="1"
        r="1"
        transform="translate(42 258)"
        fill="#c7daff"
      />
    </g>
  </svg>
);

const PRICING_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="24"
    viewBox="0 0 20 24"
  >
    <g id="Group_479" data-name="Group 479" transform="translate(-26 -311)">
      <g id="label" transform="translate(24 311)">
        <path
          id="Path_2660"
          data-name="Path 2660"
          d="M20.457,4.555,12.486.126a1,1,0,0,0-.972,0L3.543,4.555A3,3,0,0,0,2,7.177V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V7.177a3,3,0,0,0-1.543-2.622ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7.177A1,1,0,0,1,4.515,6.3L12,2.144,19.486,6.3A1,1,0,0,1,20,7.177Z"
          fill="#0058fb"
        />
        <circle
          id="Ellipse_49"
          data-name="Ellipse 49"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(10.5 5.5)"
          fill="#0058fb"
        />
      </g>
      <line
        id="Line_47"
        data-name="Line 47"
        x2="11"
        transform="translate(30.5 324.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="1"
      />
      <line
        id="Line_48"
        data-name="Line 48"
        x2="7"
        transform="translate(32.5 328.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="1"
      />
    </g>
  </svg>
);

const RESOURCES_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24.75"
    height="21.977"
    viewBox="0 0 24.75 21.977"
  >
    <g id="Group_484" data-name="Group 484" transform="translate(-24 -372.511)">
      <path
        id="list-check"
        d="M4,6a2.982,2.982,0,0,1-2.122-.879L.334,3.747A1,1,0,0,1,1.666,2.253L3.251,3.667a1,1,0,0,0,1.456.04L8.311.276A1,1,0,0,1,9.689,1.724L6.1,5.138A2.964,2.964,0,0,1,4,6ZM24,4a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H23A1,1,0,0,0,24,4ZM6.1,13.138,9.689,9.724A1,1,0,1,0,8.311,8.276l-3.6,3.431a1.023,1.023,0,0,1-1.414,0l-1.59-1.585A1,1,0,1,0,.293,11.536l1.585,1.585a3,3,0,0,0,4.226.017ZM24,12a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H23A1,1,0,0,0,24,12ZM6.1,21.138l3.585-3.414a1,1,0,1,0-1.378-1.448l-3.6,3.431a1,1,0,0,1-1.456-.04L1.666,18.253A1,1,0,1,0,.334,19.747l1.544,1.374a3,3,0,0,0,4.226.017ZM24,20a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H23A1,1,0,0,0,24,20Z"
        transform="translate(24.001 372.489)"
        fill="#0058fb"
      />
      <line
        id="Line_53"
        data-name="Line 53"
        x2="10.499"
        transform="translate(37.001 376.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <line
        id="Line_54"
        data-name="Line 54"
        x2="10.499"
        transform="translate(37.001 384.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <line
        id="Line_55"
        data-name="Line 55"
        x2="10.499"
        transform="translate(37.001 392.5)"
        fill="none"
        stroke="#c7daff"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
    </g>
  </svg>
);

const LINKEDIN_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22.807"
    height="22.806"
    viewBox="0 0 22.807 22.806"
  >
    <path
      id="Icon_awesome-linkedin-in"
      data-name="Icon awesome-linkedin-in"
      d="M5.105,22.807H.377V7.58H5.105ZM2.738,5.5A2.751,2.751,0,1,1,5.477,2.739,2.761,2.761,0,0,1,2.738,5.5ZM22.8,22.807H18.084V15.395c0-1.767-.036-4.032-2.458-4.032-2.458,0-2.835,1.919-2.835,3.9v7.54H8.067V7.58H12.6V9.657h.066A4.968,4.968,0,0,1,17.142,7.2c4.785,0,5.665,3.151,5.665,7.244v8.364Z"
      transform="translate(0 -0.001)"
      fill="#fff"
    />
  </svg>
);

const FACEBOOK_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="23"
    viewBox="0 0 12 23"
  >
    <path
      id="Icon_awesome-facebook-f"
      data-name="Icon awesome-facebook-f"
      d="M12.823,12.938l.622-4.162H9.555v-2.7a2.055,2.055,0,0,1,2.286-2.249h1.769V.281A21.03,21.03,0,0,0,10.47,0c-3.2,0-5.3,1.994-5.3,5.6V8.775H1.609v4.162H5.171V23H9.555V12.938Z"
      transform="translate(-1.609)"
      fill="#fff"
    />
  </svg>
);

export {
  CALENDAR_SVG,
  TICK_ICON,
  DOCUMENT_ICON,
  TOOLS_ICON,
  ARROW_DOWN,
  HAMBURGER_SVG,
  CROSS_SVG,
  BACK_SVG,
  INDUSTRY_SVG,
  HOME_SVG,
  FEATURE_SVG,
  PRICING_SVG,
  RESOURCES_SVG,
  LINKEDIN_SVG,
  FACEBOOK_SVG,
};
