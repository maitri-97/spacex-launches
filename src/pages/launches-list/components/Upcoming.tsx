import React, { FC, useRef, useState } from "react";
import UpcomingCard from "./UpcomingCard";
import { LaunchDataTypes } from "../../../interfaces/launches.interface";
import Container from "../../../components/shared/Container";
import {
  styleAppGrids,
  styleAppText,
  styleSectionTitle,
  styleSectionWrapper,
} from "../../../assets/css/styles";

interface Props {
  data: LaunchDataTypes[];
}

const Upcoming: FC<Props> = ({ data = [] }) => {
  const [showMore, setShowMore] = useState(false);
  const upcomingRef = useRef<null | HTMLDivElement>(null);

  const handleShowClick = () => {
    if (showMore) {
      if (upcomingRef && upcomingRef.current) {
        upcomingRef?.current?.scrollIntoView({
          block: "start",
        });
      }
    }
    setShowMore(!showMore);
  };

  return (
    <section className={styleSectionWrapper} ref={upcomingRef}>
      <Container>
        <h2 className={styleSectionTitle}>Upcoming launches</h2>
        {data && data?.length > 0 ? (
          <>
            <div className={styleAppGrids}>
              {data?.map((dataItem, idx) => {
                return (
                  idx <= (!showMore ? 2 : data.length) && (
                    <UpcomingCard key={idx} data={dataItem} />
                  )
                );
              })}
            </div>
            <p className={`${styleAppText} text-center py-[25px]`}>
              <span
                className="text-p text-white underline cursor-pointer"
                onClick={handleShowClick}
              >
                Show {!showMore ? "All" : "Less"}
              </span>
            </p>
          </>
        ) : (
          <p className={styleAppText}>No Data Found</p>
        )}
      </Container>
    </section>
  );
};

export default Upcoming;
