import React, { FC } from "react";
import PastCard from "./PastCard";
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

const Past: FC<Props> = ({ data = [] }) => {
  return (
    <section className={styleSectionWrapper}>
      <Container>
        <h2 className={styleSectionTitle}>Past launches</h2>
        <div className={styleAppGrids}>
          {data && data?.length > 0 ? (
            data?.map((dataItem, idx) => {
              return <PastCard key={idx} data={dataItem} />;
            })
          ) : (
            <p className={styleAppText}>No Data Found</p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Past;
