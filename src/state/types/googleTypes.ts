export enum GoogleApiTypes {
    GOOGLE_SIGN_IN_STARTED = 'googleSignInStarted',
    IS_SIGNED_STATUS = 'getIsSignedInStatus',
    SIGN_ERROR = 'SignError',
}

export enum SignStatus {
    SIGNING_IN = 'Signing_In',
    SIGNED_IN = 'Signed_In',
    SIGNING_OUT = 'Signing_Out',
    SIGNED_OUT = 'Signed_Out',
    SIGN_ERROR = 'Sign_Error',
}

export interface ActionGoogleSign {
    type: GoogleApiTypes
    payload: Boolean
}

export type GoogleSignInDispatch = {
    type: GoogleApiTypes
}
