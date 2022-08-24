import { ActionUser, UserTypes, UserData } from '../types/userTypes'

interface State extends UserData {
    isData: Boolean
}

const reducer = (
    state: State = { isData: false, accessToken: '', basicProfile: null },
    action: ActionUser
) => {
    switch (action.type) {
        case UserTypes.UPDATE_USER_DATA:
            console.log('payload: ', action.payload)

            return {
                isData: true,
                accessToken: action.payload?.accessToken,
                basicProfile: action.payload?.basicProfile,
            }

        default:
            return state
    }
}

export default reducer
