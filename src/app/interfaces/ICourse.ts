import { ILvlStats } from "./IStats";
import { IUser } from "./IUser";

export interface ICourse{
    name        : string,
    teacher     : IUser,
    progress    : ILvlStats
}
