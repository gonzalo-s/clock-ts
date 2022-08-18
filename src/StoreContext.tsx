import React, { useContext, useState } from 'react'

interface Context {
    calendars: gapi.client.calendar.CalendarListEntry[] | null
    setCalendarsList: (
        newCalendarsList: gapi.client.calendar.CalendarListEntry[]
    ) => void
    selectedCalendarId: string
    selectCalendar: (calendarId: string) => void
    resetCalendars: () => void
}

const StoreContext = React.createContext<Context>({
    calendars: null,
    setCalendarsList: () => {},
    selectedCalendarId: '',
    selectCalendar: () => {},
    resetCalendars: () => {},
})

export function useStoreContext() {
    return useContext(StoreContext)
}

export function StoreProvider({ children }: any) {
    const [calendars, setCalendars] = useState<
        gapi.client.calendar.CalendarListEntry[] | null
    >(null)

    const [selectedCalendarId, setSelectedCalendarId] = useState('')

    const selectCalendar = (calendarId: string) => {
        setSelectedCalendarId(calendarId)
    }

    const setCalendarsList = (
        newCalendarsList: gapi.client.calendar.CalendarListEntry[]
    ) => {
        setCalendars(newCalendarsList)
    }
    const resetCalendars = () => {
        setCalendars(null)
    }

    return (
        <StoreContext.Provider
            value={{
                calendars,
                setCalendarsList,
                selectedCalendarId,
                selectCalendar,
                resetCalendars,
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}
