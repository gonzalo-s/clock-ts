import {
    ActionGoogleSign,
    GoogleApiTypes,
    SignStatus,
} from '../types/googleTypes'

interface State {
    signStatus: SignStatus
}

const initialState = { signStatus: SignStatus.SIGNED_OUT }

const reducer = (state: State = initialState, action: ActionGoogleSign) => {
    switch (action.type) {
        case GoogleApiTypes.GOOGLE_SIGN_IN_STARTED:
            return { signStatus: SignStatus.SIGNING_IN }
        case GoogleApiTypes.IS_SIGNED_STATUS:
            const actualState = action.payload
                ? SignStatus.SIGNED_IN
                : SignStatus.SIGNED_OUT

            return { signStatus: actualState }
        case GoogleApiTypes.SIGN_ERROR:
            return { signStatus: SignStatus.SIGN_ERROR }

        default:
            return state
    }
}
export default reducer
