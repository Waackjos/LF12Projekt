import { ICourse } from "src/app/interfaces/ICourse"
import { ILvlStats } from "src/app/interfaces/IStats"
import { IName, IUser, IUserLogin, userRole } from "src/app/interfaces/IUser"

let demoTeacher : IUser = {
    username    : "demoTeacher",
    realname    : {
        surname     :"Demo",
        lastname    :"Teacher"
    },
    id          : 901,
    role        : userRole.TEACHER
}

let userInfo    : IName = {
    surname     : "Demo",
    lastname    : "Student"
}

let progress    : ILvlStats = {
    level       : 11,
    currentEXP  : 2033
}

let dc1Progress : ILvlStats = {
    level       : 2,
    currentEXP  : 120
}

let demoCourse1 : ICourse = {
    name    : "Lernfeld DEMO",
    teacher : demoTeacher,
    progress: dc1Progress
}

let demoStudent : IUser = {
    username    : "demoStudent",
    realname    : userInfo,
    id          : 101,
    role        : userRole.STUDENT,
    progress    : progress,
    courses     : [
        demoCourse1
    ]
}

let demoUserList : IUserLogin[] = [
    {
        username    : "demoStudent",
        password    : "demoStudent"
    },
    {
        username    : "demoTeacher",
        password    : "demoTeacher"
    }
]

export { demoStudent, demoTeacher, demoUserList }