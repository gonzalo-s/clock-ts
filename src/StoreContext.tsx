import React, { useContext, useState } from 'react'

interface Context {
    calendars: gapi.client.calendar.CalendarListEntry[] | null
    setCalendarsList: (
        newCalendarsList: gapi.client.calendar.CalendarListEntry[]
    ) => void
    selectedCalendarId: string
    selectCalendar: (calendarId: string) => void
    resetCalendars: () => void
    setNewCalendarData: (calendarData: gapi.client.calendar.Event[]) => void
    getIsSignedInStatus: (status: boolean) => void
    isSignedIn: boolean
    calendarData: gapi.client.calendar.Event[] | undefined
}

const StoreContext = React.createContext<Context>({
    calendars: null,
    setCalendarsList: () => {},
    selectedCalendarId: '',
    selectCalendar: () => {},
    resetCalendars: () => {},
    setNewCalendarData: () => {},
    getIsSignedInStatus: () => {},
    isSignedIn: false,
    calendarData: undefined,
})

export function useStoreContext() {
    return useContext(StoreContext)
}

export function StoreProvider({ children }: any) {
    const [calendars, setCalendars] = useState<
        gapi.client.calendar.CalendarListEntry[] | null
    >(null)

    const [selectedCalendarId, setSelectedCalendarId] = useState('')

    const [calendarData, setCalendarData] =
        useState<gapi.client.calendar.Event[]>()

    const [isSignedIn, setIsSignedIn] = useState(false)

    // ! END of useState

    const setNewCalendarData = (calendarData: gapi.client.calendar.Event[]) => {
        setCalendarData(calendarData)
    }

    const selectCalendar = (calendarId: string) => {
        setSelectedCalendarId(calendarId)
    }

    const setCalendarsList = (
        newCalendarsList: gapi.client.calendar.CalendarListEntry[]
    ) => {
        setCalendars(newCalendarsList)
    }
    const resetCalendars = () => {
        console.log('reset calendars')
        setCalendars(null)
    }

    const getIsSignedInStatus = (status: boolean) => {
        setIsSignedIn(status)
    }

    return (
        <StoreContext.Provider
            value={{
                calendars,
                setCalendarsList,
                selectedCalendarId,
                selectCalendar,
                resetCalendars,
                setNewCalendarData,
                getIsSignedInStatus,
                isSignedIn,
                calendarData,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
