import React from 'react'
import { gapi } from 'gapi-script'
import { useState } from 'react'
import { useStoreContext } from '../StoreContext'
import GoogleButton from 'react-google-button'
import * as googleSignAction from '../state/action-creators/googleSignAction'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const GoogleSign = () => {
    const { getIsSignedInStatus, setCalendarsList } = useStoreContext()
    const dispatch = useDispatch()

    const { startSignIn } = bindActionCreators(googleSignAction, dispatch)

    async function authenticate() {
        try {
            const authResponse = await gapi.auth2.getAuthInstance().signIn({
                scope: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly',
            })
            getIsSignedInStatus(authResponse.isSignedIn())
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
            await loadClient()
            const newCalendars = await getCalendarList()
            if (newCalendars) setCalendarsList(newCalendars.items)
        } catch (error) {
            throw Error(`Error initializing gapi client: ${error}`)
        }
    }

    return (
        <div>
            <GoogleButton
                onClick={() => {
                    console.log('loadGapi')
                    startSignIn()
                }}
            >
                SignIn
            </GoogleButton>
        </div>
    )
}

export default GoogleSign
