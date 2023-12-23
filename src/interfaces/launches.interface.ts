import { Dispatch, SetStateAction } from "react";

type LaunchesLink = {
    patch: {
        large: string,
        small: string
    },
    webcast: string
}

type LaunchFail = {
    reason: string;
}


export interface LaunchDataTypes {
    name: string;
    success: boolean;
    links: LaunchesLink;
    fails?: LaunchFail[];
    upcoming: boolean;
    date_utc: Date;
}

export interface filterDataType {
    status?: string[],
    year?: number[],
    sorting?: string[]
}

export interface AlertDataType {
    type?: string;
    message: string;
    show: boolean;
    setShow?: Dispatch<SetStateAction<boolean>>;
    cancelBtnText?: string;
    actionBtnText?: string;
    actionBtnClick?: () => void;
}

