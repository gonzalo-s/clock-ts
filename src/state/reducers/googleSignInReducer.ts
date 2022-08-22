import { Action, GoogleApiTypes } from '../types/actionTypes'

interface State {
    signStatus: SignStatus
}

enum SignStatus {
    SIGNING_IN = 'Signing_In',
    SIGNED_IN = 'Signed_In',
    SIGNING_OUT = 'Signing_Out',
    SIGNED_OUT = 'Signed_Out',
}

const initialState = { signStatus: SignStatus.SIGNED_OUT }

const reducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case GoogleApiTypes.GOOGLESIGNINSTARTED:
            return { signStatus: SignStatus.SIGNING_IN }
        default:
            return state
    }
}
export default reducer
