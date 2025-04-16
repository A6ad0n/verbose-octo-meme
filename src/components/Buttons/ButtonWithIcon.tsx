import { IconType } from "react-icons";
import Button from "./Button";

interface ButtonWithIconProps {
  Icon?: IconType;
  text?: string;
  alignText?: "left" | "center" | "right";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const ButtonWithIcon = ({
  Icon,
  text = "",
  alignText = "center",
  onClick = () => {},
  disabled = false,
  className,
}: ButtonWithIconProps) => {
  return (
    <Button
      elementInside={
        <div className={`flex items-center gap-[6px] justify-${alignText}`}>
          {text}
          {Icon ? <Icon /> : null}
        </div>
      }
      onClick={onClick}
      className={className}
      disabled={disabled}
    />
  );
};

export default ButtonWithIcon;