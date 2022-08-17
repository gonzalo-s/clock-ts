interface DateRange {
    today: Date
    plusTen: Date
}

const formatDateRange = (): DateRange => {
    const today = new Date()
    const plusTen = new Date()
    plusTen.setDate(today.getDate() + 10)
    return {
        today,
        plusTen,
    }
}

export const getCalendarData = async (calendarId: string) => {
    const { today, plusTen } = formatDateRange()

    try {
        const data = await gapi.client.calendar.events.list({
            calendarId: calendarId,
            timeMin: today.toISOString(),
            timeMax: plusTen.toISOString(),
        })
        console.log('getCalendarData Response', data.result)
    } catch (err) {
        console.error('getCalendarData error', err)
    }
}
