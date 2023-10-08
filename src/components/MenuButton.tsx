import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type TMenuButtonProps = PropsWithChildren & {
  disabled?: boolean;
  active?: boolean;
  href?: string;
  onClick?: () => void;
};

const MenuButton: FC<TMenuButtonProps> = ({ href, onClick, disabled = false, active = false, children }) => {
  const borderImage = active ? "button-selected.png" : "button-default.png";
  const textColor = !disabled ? "text-white" : "text-gray-500";

  return (
    <div
      className={`flex items-center justify-center ${textColor} w-full h-full select-none`}
      style={{
        borderImage: `url(/header/${borderImage}) 15 fill round`,
        borderWidth: 15,
      }}
      onClick={onClick}
    >
      {href && !disabled ? <Link to={href}>{children}</Link> : <span>{children}</span>}
    </div>
  );
};

export default MenuButton;
