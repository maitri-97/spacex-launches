import { getYear } from "../services/utils/general";

export const launchStatus = [
    { name: "successful", id: "success" },
    { name: "Fail", id: "fail" },
];

export const sortBy = [
    { name: "Newest to Oldest", id: "newToOld" },
    { name: "Oldest to Newest", id: "oldToNew" },
];

const currentYear = getYear(new Date());

const yearArray = Array.from({ length: 100 }, (value, idx: number) => (+currentYear - +idx));

export const launchYear = yearArray.map((year, idx) => {
    return (
        {
            name: `${year}`, id: `${year}`
        }
    )
})