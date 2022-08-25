import { ActionUser, UserTypes, UserData } from '../types/userTypes'

interface State extends UserData {
    isData: Boolean
}

const reducer = (
    state: State = { isData: false, accessToken: '', basicProfile: null },
    action: ActionUser
): State => {
    switch (action.type) {
        case UserTypes.UPDATE_USER_DATA:
            console.log('payload: ', action.payload)

            return {
                isData: true,
                accessToken: action.payload
                    ? action.payload?.accessToken
                    : null,
                basicProfile: action.payload
                    ? action.payload?.basicProfile
                    : null,
            }

        default:
            return state
    }
}

export default reducer
