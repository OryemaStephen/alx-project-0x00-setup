import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  styles,
  className,
  onClick,
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeStyles: Record<string, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeStyles: Record<string, string> = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-lg": "rounded-lg",
    "rounded-full": "rounded-full",
    "rounded-none": "rounded-none",
  };

  const buttonStyles = `bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-200 ${
    className || ""
  } ${sizeStyles[size]} ${shapeStyles[shape]}`;

  return (
    <button onClick={onClick} style={styles} className={buttonStyles}>
      {title}
    </button>
  );
};

export default Button;
