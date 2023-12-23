import { FC, ReactNode } from "react";
import { styleCard } from "../../assets/css/styles";

interface Props {
  children?: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className = "" }) => {
  return (
    <div
      className={`${styleCard} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
