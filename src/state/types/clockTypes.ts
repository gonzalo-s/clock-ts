export enum ClockTypes {
    UPDATE_TIME = 'updateTime',
}

export interface ActionClock {
    type: ClockTypes
    payload: string
}

export interface NewTime {
    nowHh: string
    nowMm: string
    nowSs: string
    nowYear: string
    nowMonth: string
    nowDate: string
    nowFullTimeString: string
}
