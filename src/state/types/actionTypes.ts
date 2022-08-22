export enum ActionType {
    UPDATETIME = 'updateTime',
}
export enum GoogleApiTypes {
    GOOGLESIGNINSTARTED = 'googleSignInStarted',
}

export interface GoogleSignIn {
    type: String
}

export interface Action {
    type: String
    payload: NewTime
}

export interface NewTime {
    hh: String
    mm: String
    ss: String
    date: String
}
