const Button = ({
  type = "primary",
  title = "",
  fullWidth = false,
  bgColor = "",
  prependIcon = null,
  ...rest
}) => {
  const getClassName = () => {
    let className = "";

    switch (type) {
      case "primary":
        className = "btn-primary";
        break;
      case "secondary":
        className = "btn-secondary";
        break;
      case "dark":
        className = "btn-dark";
        break;
      case "default":
        className = "btn-default";
        break;
      default:
        break;
    }
    if (fullWidth) {
      className += "-full-width";
    }
    return className;
  };

  return (
    <button {...rest} className={getClassName()}>
      {Boolean(prependIcon) && prependIcon} {title}
    </button>
  );
};

export default Button;
