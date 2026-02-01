import "./button.css";

const links = {
  github: "https://github.com/alexlovesguitars",
  linkedin: "https://www.linkedin.com/in/alexander-pfitzner",
  resume: "/Alexander-Pfitzner-Resume.pdf",
  foodiefeed: "https://www.foodiefeed.eu",
  pestcontrolpets: "https://www.pestcontrolpets.com",
};

function Button({
  children,
  variant = "default",
  hrefKey,
  ...props
}) {
  const href = hrefKey ? links[hrefKey] : undefined;

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

export default Button;
