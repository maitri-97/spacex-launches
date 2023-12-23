import { FC, ReactNode } from "react";
import { styleContainer } from "../../assets/css/styles";

interface Props {
  children?: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className = "" }) => {
  return <div className={`${styleContainer} ${className}`}>{children}</div>;
};

export default Container;
