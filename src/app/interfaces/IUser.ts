import { ICourse } from "./ICourse";
import { ILvlStats } from "./IStats";

export interface IUser{
    username    : string,
    realname    : IName,
    id          : number,
    role        : userRole,
    progress    : ILvlStats,
    courses     : ICourse[]
}

export interface IName{
    surname     : string,
    lastname    : string,
}

export enum userRole{
    ADMIN,
    TEACHER,
    STUDENT
}