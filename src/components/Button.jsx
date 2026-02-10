import "./button.css";

const links = {
  github: "https://github.com/alexlovesguitars",
  linkedin: "https://www.linkedin.com/in/alexander-pfitzner",
  resume: "/Alexander-Pfitzner-Resume.pdf",
  foodiefeed: "https://www.foodiefeed.eu/",
  pestcontrolpets: "https://pestcontrolpets.onrender.com/",
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

  // 👉 If it's a link, render <a>
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

  // 👉 Otherwise, render <button>
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
