import React, { FC } from "react";

export interface PageTitleProps {
  pageTitle?: string;
}

const Title: FC<PageTitleProps> = ({ pageTitle }) => {
  return <h1 className="relative z-[1] text-white font-secondary text-h1 sm:text-h2 text-center">{pageTitle}</h1>;
};

export default Title;
