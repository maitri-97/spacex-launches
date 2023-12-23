import { DropdownDataTypes } from "../../interfaces/dropdown.interface";


// convert date format
export const convertToDateFormat = (inputDate: Date) => {
    let date: any = new Date(inputDate);
    date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return date;
}

export const getYear = (inputDate: Date) => {
    let date: any = new Date(inputDate);
    return date.getFullYear();
}

// replace spacing with _ in string
export const convertStringtoSearchParam = (inputStr: string) => {
    return inputStr.replaceAll(" ", "_").toLocaleLowerCase()
}

// get id of selected dropdown values as array
export const fetchSelectedDropdownVal = (inputArr: DropdownDataTypes[]) => {
    return inputArr?.map((item: DropdownDataTypes) =>
        convertStringtoSearchParam(item.name)
    );
}
