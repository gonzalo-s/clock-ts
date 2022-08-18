import React from 'react'
import { gapi } from 'gapi-script'
import { useState } from 'react'
import { useStoreContext } from '../StoreContext'

const GoogleSign = () => {
    const { setCalendarsList } = useStoreContext()

    const [isSignedIn, setIsSignedIn] = useState(false)

    async function authenticate() {
        try {
            const authResponse = await gapi.auth2.getAuthInstance().signIn({
                scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly',
            })
            setIsSignedIn(authResponse.isSignedIn())
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
    async function getCalendarList() {
        try {
            const result = await gapi.client.calendar.calendarList.list({
                maxResults: 15,
                showDeleted: false,
            })
            return result.result
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

    const loadGapi = async () => {
        try {
            await new Promise((resolve, reject) => {
                gapi.load('client:auth2', resolve)
            })
            await authenticate()
            console.log('aithenticated awaited')
            await loadClient()
            console.log('loadClient awaited')
            const newCalendars = await getCalendarList()
            if (newCalendars) setCalendarsList(newCalendars.items)
        } catch (error) {
            throw Error(`Error initializing gapi client: ${error}`)
        }
    }

    return (
        <div>
            GoogleSign
            <div>{isSignedIn ? 'Logged' : 'Not Logged'}</div>
            <button onClick={authenticate}>authorize</button>
            <button onClick={loadClient}>loadClient</button>
            <button onClick={getCalendarList}>getCalendarList</button>
            <button onClick={loadGapi}>LOADGAPI</button>
        </div>
    )
}

export default GoogleSign
