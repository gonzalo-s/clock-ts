export enum ClockTypes {
    UPDATE_TIME = 'updateTime',
}

export interface ActionClock {
    type: ClockTypes
    payload: NewTime
}

export interface NewTime {
    hh: String
    mm: String
    ss: String
    date: String
}
