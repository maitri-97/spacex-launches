import { createContext, SetStateAction, Dispatch } from "react";
import { LaunchDataTypes } from "../interfaces/launches.interface";


type LaunchesDataContextType = {
    data: LaunchDataTypes[] | [];
    originalData: LaunchDataTypes[] | [];
    setData: Dispatch<SetStateAction<LaunchDataTypes[]>>
    setOriginalData: Dispatch<SetStateAction<LaunchDataTypes[]>>
}

export const LaunchesDataContext = createContext<LaunchesDataContextType>(null!);