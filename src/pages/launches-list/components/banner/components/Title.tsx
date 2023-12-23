import React, { FC } from "react";
import { stylePageTitle } from "../../../../../assets/css/styles";

export interface PageTitleProps {
  pageTitle?: string;
  className?: string;
}

const Title: FC<PageTitleProps> = ({ pageTitle, className }) => {
  return <h1 className={`${stylePageTitle} ${className}`}>{pageTitle}</h1>;
};

export default Title;
