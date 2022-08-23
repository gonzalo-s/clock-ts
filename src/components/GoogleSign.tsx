import React from 'react'
import GoogleButton from 'react-google-button'
import * as googleSignAction from '../state/action-creators/googleSignAction'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const GoogleSign = () => {
    const dispatch = useDispatch()

    const { startSignIn } = bindActionCreators(googleSignAction, dispatch)

    return (
        <div>
            <GoogleButton
                onClick={() => {
                    startSignIn()
                }}
            >
                SignIn
            </GoogleButton>
        </div>
    )
}

export default GoogleSign
