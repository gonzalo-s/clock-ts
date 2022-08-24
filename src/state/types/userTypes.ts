export enum UserTypes {
    UPDATE_USER_DATA = 'updateUserData',
    CHECK_LOCAL_USER_DATA = 'checkLocalUserData',
}

export interface ActionUser {
    type: UserTypes
    payload?: UserData
}

export interface UserData {
    accessToken: String
    basicProfile: BasicProfile | null
}

export type UserDispatch = {
    type: UserTypes
}

export interface BasicProfile {
    id: String
    fullName: String
    givenName: String
    familyName: String
    imageURL: String
    email: String
}
