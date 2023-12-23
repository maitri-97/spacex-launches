import React, { useContext, useEffect, useState } from "react";
import coverImage from "../../assets/images/cover-img.jpg";
import Upcoming from "./components/Upcoming";
import { getLaunchesListAPi } from "../../services/apis/LaunchesAPI";
import { LaunchesDataContext } from "../../contexts/LaunchesContext";
import {
  LaunchDataTypes,
  filterDataType,
} from "../../interfaces/launches.interface";
import Past from "./components/Past";
import Banner from "./components/banner";
import { useSearchParams } from "react-router-dom";
import { getYear } from "../../services/utils/general";
import Container from "../../components/shared/Container";

const LaunchesList = () => {
  let { setData, originalData, setOriginalData } =
    useContext(LaunchesDataContext);
  const [upcomingLaunches, setUpcomingLaunches] = useState<LaunchDataTypes[]>(
    []
  );
  const [pastLaunches, setPastLaunches] = useState<LaunchDataTypes[]>([]);
  const [searchParams] = useSearchParams();
  const [filterData, setFilterData] = useState<filterDataType>({});

  useEffect(() => {
    (async () => {
      let launchesdata: any = await getLaunchesListAPi();
      setData(launchesdata);
      launchesdata = await defaultFilters(launchesdata);
      if (originalData.length === 0) {
        setOriginalData(launchesdata);
      }
      const upcominglaunches = launchesdata?.filter(
        (launch: LaunchDataTypes) => launch.upcoming === true
      );
      setUpcomingLaunches([...upcominglaunches]);
      const pastlaunches = launchesdata?.filter(
        (launch: LaunchDataTypes) => launch.upcoming !== true
      );
      setPastLaunches([...pastlaunches]);
    })();
  }, [searchParams]);

  const defaultFilters = (launchesdata: []) => {
    let filterdata: any = {},
      launchesData: any = launchesdata;
    for (const entry of searchParams.entries()) {
      filterdata[entry[0]] = entry[1];
    }
    setFilterData(filterdata);
    Object.keys(filterdata)?.map((filter) => {
      switch (filter) {
        case "sorting":
          launchesData = getSortedData(filterdata[filter], launchesData);
          break;
        case "year":
          launchesData = getFilteredDataOfYear(
            filterdata[filter],
            launchesData
          );
          break;
        case "status":
          launchesData = getFilteredDataOfStatus(
            filterdata[filter],
            launchesData
          );
      }
    });
    return launchesData;
  };

  const getFilteredDataOfStatus = (filterVal: string, launchesData: []) => {
    const filterValArr = filterVal.split(",");
    return launchesData.filter((launchesdata) => {
      const status =
        launchesdata["success"] === true
          ? "successful"
          : launchesdata["upcoming"] !== true
          ? "fail"
          : "";
      return filterValArr.includes(status);
    });
  };

  const getFilteredDataOfYear = (filterVal: string, launchesData: []) => {
    const filterValArr = filterVal.split(",");
    return launchesData.filter((launchesdata) => {
      const year = getYear(launchesdata["date_utc"]);
      return filterValArr.includes(`${year}`);
    });
  };

  const getSortedData = (sortType: string, launchesdata: []) => {
    let sortedData: LaunchDataTypes[] | [] = [...launchesdata];
    switch (sortType) {
      case "newest_to_oldest":
        sortedData = [...sortedData]?.sort(
          (dataItem1: any, dataItem2: any) =>
            +new Date(dataItem2?.date_utc) - +new Date(dataItem1?.date_utc)
        );
        break;
      case "oldest_to_newest":
        sortedData = [...sortedData]?.sort(
          (dataItem1: any, dataItem2: any) =>
            +new Date(dataItem1?.date_utc) - +new Date(dataItem2?.date_utc)
        );
        break;
    }
    setData([...sortedData]);
    return sortedData;
  };

  return (
    <>
      <Banner pageTitle="Launches" coverImage={coverImage} />
      <Container>
        {filterData && Object.keys(filterData).length > 0 && (
          <p className="pt-[25px] text-white">
            Showing results for{" "}
            {Object.keys(filterData).length > 0 &&
              Object.keys(filterData)?.map((filter: string, idx) => {
                return (
                  <span key={idx} className="text-white">
                    <span className="text-blue">{filter}</span>{" "}
                    <span className="capitalize">"{filterData[filter as keyof typeof filterData]?.toString().replaceAll("_"," ")}"</span>
                    {idx !== Object.keys(filterData).length - 1 && <>,&nbsp;</>}
                  </span>
                );
              })}
          </p>
        )}
      </Container>
      <Upcoming data={upcomingLaunches} />
      <Past data={pastLaunches} />
    </>
  );
};

export default LaunchesList;
