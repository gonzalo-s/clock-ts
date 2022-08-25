export enum UserTypes {
    UPDATE_USER_DATA = 'updateUserData',
    CHECK_LOCAL_USER_DATA = 'checkLocalUserData',
}

export interface ActionUser {
    type: UserTypes
    payload?: UserData
}

export interface UserData {
    accessToken: string | null
    basicProfile: BasicProfile | null
}

export type UserDispatch = {
    type: UserTypes
}

export interface BasicProfile {
    id: string
    fullName: string
    givenName: string
    familyName: string
    imageURL: string
    email: string
}
