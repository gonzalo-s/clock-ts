import { Dispatch } from 'react'
import { GoogleApiTypes, GoogleSignInDispatch } from '../types/googleTypes'
import { gapi } from 'gapi-script'
import { CalendarTypes, CalendarDispatch } from '../types/calendarTypes'
import { UserDispatch, UserTypes, BasicProfile } from '../types/userTypes'

const googleSignInStarted = () => {
    return { type: GoogleApiTypes.GOOGLE_SIGN_IN_STARTED }
}
const isSignedStatus = (status: Boolean) => {
    return {
        type: GoogleApiTypes.IS_SIGNED_STATUS,
        payload: status,
    }
}
const signError = () => {
    return {
        type: GoogleApiTypes.SIGN_ERROR,
    }
}

const updateCalendars = (
    calendars: gapi.client.calendar.CalendarListEntry[]
) => {
    return {
        type: CalendarTypes.UPDATE_CALENDARS,
        payload: calendars,
    }
}

const updateUserData = (accessToken: string, basicProfile: BasicProfile) => {
    return {
        type: UserTypes.UPDATE_USER_DATA,
        payload: { accessToken, basicProfile },
    }
}

async function authenticate(
    dispatch: Dispatch<GoogleSignInDispatch | UserDispatch>
) {
    try {
        const authResponse = await gapi.auth2.getAuthInstance().signIn({
            scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly',
        })
        console.log('Authenticate_async_function: ', authResponse)
        console.log(authResponse.getBasicProfile())
        const accessToken = authResponse.getAuthResponse().access_token
        const profile = authResponse.getBasicProfile()
        const basicProfile = {
            id: profile.getId(),
            fullName: profile.getName(),
            givenName: profile.getGivenName(),
            familyName: profile.getFamilyName(),
            imageURL: profile.getImageUrl(),
            email: profile.getEmail(),
        }
        dispatch(updateUserData(accessToken, basicProfile))
        dispatch(isSignedStatus(authResponse.isSignedIn()))
    } catch (error) {
        console.log('authenticate error: ', error)
    }
}
async function loadClient() {
    gapi.client.setApiKey('AIzaSyDiWO1vmAoFB3xZZ_4Ez0d-hNHwUSWfufU')
    try {
        await gapi.client.load(
            'https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest',
            ''
        )
    } catch (error) {
        console.log('error loading client: ', error)
    }
}
// Make sure the client is loaded and sign-in is complete before calling this method.
async function getCalendarList(dispatch: Dispatch<CalendarDispatch>) {
    try {
        await gapi.client.calendar.calendarList
            .list({
                maxResults: 15,
                showDeleted: false,
            })
            .then((res) => {
                const calendarList = res.result.items
                dispatch(updateCalendars(calendarList))
            })
    } catch (error) {
        console.log('error getting calendar list: ', error)
    }
}

gapi.load('client:auth2', () => {
    gapi.auth2.init({
        client_id:
            '941537442928-1id8j3e50mnd9aknr65i392op3dled99.apps.googleusercontent.com',
    })
})

export const startSignIn = () => {
    const loadGapi = async (
        dispatch: Dispatch<
            GoogleSignInDispatch | CalendarDispatch | UserDispatch
        >
    ) => {
        try {
            dispatch(googleSignInStarted())
            await new Promise((resolve, reject) => {
                gapi.load('client:auth2', resolve)
            })
            await authenticate(dispatch)
            await loadClient()
            await getCalendarList(dispatch)

            // if (newCalendars) setCalendarsList(newCalendars.items)
        } catch (error) {
            dispatch(signError())
            throw Error(`Error initializing gapi client: ${error}`)
        }
    }
    return (
        dispatch: Dispatch<
            GoogleSignInDispatch | CalendarDispatch | UserDispatch
        >
    ) => {
        loadGapi(dispatch)
    }
}
