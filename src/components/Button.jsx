const Button = ({
  fill,
  title = "",
  type = "button",
  className = "",
  noStyling = false,
  children,
  ...props
}) => {
  const buttonProps = {
    type,
    className: `${
      noStyling
        ? ""
        : fill
        ? "bg-primary-400 hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600 text-white"
        : "border border-primary-500 text-primary-500 hover:text-white focus:outline-none focus:text-white focus:bg-primary-500 hover:bg-primary-500 active:bg-primary-400 bg-transparent"
    } rounded-md transition-all text-xs duration-200 p-3 py-2.5 outline-none active:scale-90 ${className}`,
    ...props,
  };

  return <button {...buttonProps}>{children || title}</button>;
};

export default Button;
