interface DateRange {
    today: string
    plusTen: string
}

const formatDateRange = (): DateRange => {
    const today = new Date()
    const plusTen = new Date()
    plusTen.setDate(today.getDate() + 10)
    return {
        today: today.toISOString(),
        plusTen: plusTen.toISOString(),
    }
}

export const getCalendarData = async (calendarId: string) => {
    const { today, plusTen } = formatDateRange()

    try {
        const data = await gapi.client.calendar.events.list({
            calendarId: calendarId,
            timeMin: today,
            timeMax: plusTen,
            singleEvents: true,
            orderBy: 'startTime',
        })
        return data.result.items
    } catch (err) {
        console.error('getCalendarData error', err)
    }
}
