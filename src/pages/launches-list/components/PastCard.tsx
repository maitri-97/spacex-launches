import React, { FC } from "react";
import { LaunchDataTypes } from "../../../interfaces/launches.interface";
import { convertToDateFormat } from "../../../services/utils/general";
import Card from "../../../components/shared/Card";

import LogoImage from "../../../assets/images/svg/logo.svg";
import {
  styleAppText,
  styleAppTextSm,
  styleCardImage,
  styleCardImageWrap,
} from "../../../assets/css/styles";

interface Props {
  data: LaunchDataTypes;
}

const PastCard: FC<Props> = ({ data }) => {
  const launchImage = data?.links?.patch?.large || LogoImage;
  return (
    <>
      <Card>
        <div className={styleCardImageWrap}>
          <img src={launchImage} alt="" className={styleCardImage} />
        </div>
        <div>
          <p className={styleAppTextSm}>{convertToDateFormat(data.date_utc)}</p>
          <p className={`${styleAppText} uppercase`}>{data?.name}</p>
          <p className={`${styleAppTextSm} ${data?.success ? 'text-green-400' : 'text-red-400'} capitalize`}> {data?.success ? "successful" : "Fail"}</p>
        </div>
      </Card>
    </>
  );
};

export default PastCard;
