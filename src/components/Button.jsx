import "./button.css";

const links = {
  github: "https://github.com/alexlovesguitars",
  linkedin: "https://www.linkedin.com/in/alexander-pfitzner",
  resume: "/Alexander-Pfitzner-Resume.pdf",
  foodiefeed: "https://www.youtube.com/watch?v=PyjysKqsE0I",
  pestcontrolpets: "https://youtu.be/aokdQPaMXg4",
  portfolio: "",
};

function Button({
  children,
  variant = "default",
  hrefKey,
  type = "button",
  ...props
}) {
  const href = hrefKey ? links[hrefKey] : undefined;

  if (href) {
    return (
      <a
        href={href}
        className={`button button--${variant}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`button button--${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
