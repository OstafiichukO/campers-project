import cl from "./Button.module.scss";

const Button = function ({ tag, type, className, children, onClick }) {
  switch (tag) {
    case "li":
      return <li className={cl[className]}>{children}</li>;

    case "button":
      return (
        <button type={type} className={cl[className]} onClick={onClick}>
          {children}
        </button>
      );

    default:
      return null;
  }
};

export default Button;
