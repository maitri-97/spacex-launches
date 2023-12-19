import React from "react";
import Search from "../../../assets/images/svg/search.svg";

const SearchButton = ({ onClick = () => {} }) => {
  return (
    <button type="button" onClick={onClick} title="Search" className="leading-[0]">
      <i className="search-icon sm:w-[15px] sm:h-[16px] w-[18px] h-[19px] inline-block">
        <img src={Search} alt="" className="w-full h-full leading-[0]" />
      </i>
    </button>
  );
};

export default SearchButton;
