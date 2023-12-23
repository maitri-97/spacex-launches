import { useContext, useEffect, useState } from "react";
import Select from "react-dropdown-select";
import {
  convertStringtoSearchParam,
  fetchSelectedDropdownVal,
} from "../../../../../services/utils/general";
import { useSearchParams } from "react-router-dom";
import { LaunchesDataContext } from "../../../../../contexts/LaunchesContext";
import { DropdownDataTypes } from "../../../../../interfaces/dropdown.interface";
import { launchStatus, sortBy, launchYear } from "../../../../../mock/mock";
import {
  styleAppText,
  styleButtonPrimary,
} from "../../../../../assets/css/styles";

const SearchBlock = () => {
  const { data } = useContext(LaunchesDataContext);
  const initActiveFilter = {
    status: [],
    year: [],
    sorting: [],
  };
  const [activeFilterData, setActiveFilterData] =
    useState<any>(initActiveFilter);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterAction = (filterObj = { values: [], filter: "key" }) => {
    const { values, filter } = filterObj;
    setActiveFilterData({ ...activeFilterData, [filter]: values });
  };

  const handleApply = (filterData = activeFilterData) => {
    Object.keys(filterData)?.map((filter, idx) => {
      const values = fetchSelectedDropdownVal(filterData[filter]);
      setSearchParams((searchParams) => {
        if (values.length > 0) searchParams.set(`${filter}`, `${values}`);
        else searchParams.delete(`${filter}`);
        return searchParams;
      });
    });
  };

  const getSearchParamVal = (param: string) => {
    return searchParams.getAll(param);
  };

  useEffect(() => {
    let activeFilterDataVal = { ...activeFilterData };

    const getDropdownOptions = (filter: string = "") => {
      switch (filter) {
        case "sorting":
          return sortBy;
        case "year":
          return launchYear;
        case "status":
          return launchStatus;
        default:
          return [];
      }
    };
    const applyFilterOnData = (filter = "") => {
      let filterVal = getSearchParamVal(filter);
      if (filterVal.length > 0) {
        filterVal = filterVal[0].split(",");
        const dropdownOptions = getDropdownOptions(filter);
        let updatedFilter: DropdownDataTypes[] = dropdownOptions?.filter(
          (item: DropdownDataTypes) =>
            filterVal.includes(convertStringtoSearchParam(item.name))
              ? true
              : false
        );
        activeFilterDataVal = {
          ...activeFilterDataVal,
          [filter]: [...updatedFilter],
        };
      }
    };

    applyFilterOnData("sorting");
    applyFilterOnData("status");
    applyFilterOnData("year");
    setActiveFilterData({ ...activeFilterDataVal });
    handleApply({ ...activeFilterDataVal });
  }, [data]);

  const handleReset = () => {
    console.log(searchParams);
    setSearchParams((searchParams) => {
      searchParams.delete("status");
      searchParams.delete("sorting");
      searchParams.delete("year");
      return searchParams;
    });
    setActiveFilterData(initActiveFilter);
  };

  const YearDropdown = () => {
    return (
      <Select
        options={launchYear}
        labelField="name"
        valueField="id"
        onChange={(values: any) =>
          handleFilterAction({ values, filter: "year" })
        }
        values={activeFilterData.year}
        className="custom-select"
        multi={true}
        searchable={false}
      />
    );
  };

  const StatusDropdown = () => {
    return (
      <Select
        options={launchStatus}
        labelField="name"
        valueField="id"
        onChange={(values: any) =>
          handleFilterAction({ values, filter: "status" })
        }
        values={activeFilterData.status}
        className="custom-select"
        multi={true}
        searchable={false}
      />
    );
  };

  const SortingDropdown = () => {
    return (
      <Select
        options={sortBy}
        labelField="name"
        valueField="id"
        onChange={(values: any) =>
          handleFilterAction({ values, filter: "sorting" })
        }
        values={activeFilterData.sorting}
        className="custom-select"
        searchable={false}
      />
    );
  };

  return (
    <div className="bg-black bg-opacity-[65%] mx-auto lg:w-[800px] w-[990px] p-[15px]">
      <div className="flex gap-[15px] items-center justify-center">
        <div className="w-[280px]">
          <p className={`${styleAppText} mb-[5px]`}>Year</p>
          <YearDropdown />
        </div>
        <div className="w-[280px]">
          <p className={`${styleAppText} mb-[5px]`}>Status</p>
          <StatusDropdown />
        </div>
        <div className="w-[280px]">
          <p className={`${styleAppText} mb-[5px]`}>Sort By</p>
          <SortingDropdown />
        </div>
        <div className="flex items-center flex-col">
          <p className={`${styleAppText} mb-[5px]`}>&nbsp;</p>
          <button
            type="button"
            className={styleButtonPrimary}
            onClick={() => handleApply(activeFilterData)}
          >
            Apply
          </button>
        </div>
      </div>
      <div className="flex items-start justify-center pt-[10px]">
        <button
          className="text-white text-p p-0"
          onClick={handleReset}
          title="Reset Filters"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default SearchBlock;
