import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-amarelo text-preto font-semibold hover:bg-amarelo-claro transition-colors",
  ghost:
    "border border-white/30 text-white font-semibold hover:border-white hover:bg-white/5 transition-colors",
  dark: "bg-preto text-amarelo font-semibold hover:bg-cinza-escuro border border-amarelo/30 hover:border-amarelo transition-colors",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
