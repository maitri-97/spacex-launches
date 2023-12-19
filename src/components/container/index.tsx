import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="container px-[20px]">{children}</div>;
};

export default Container;
