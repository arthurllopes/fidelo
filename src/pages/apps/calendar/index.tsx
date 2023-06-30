// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Redux Imports

// ** Hooks

// ** Types
//import { CalendarColors, CalendarFiltersType } from 'src/types/apps/calendarTypes'

// ** FullCalendar & App Components Imports


// ** Actions
const addEvent = () => console.log('action'),
fetchEvents = () => console.log('action'),
deleteEvent = () => console.log('action'),
updateEvent = () => console.log('action'),
handleSelectEvent = () => console.log('action'),
handleAllCalendars = () => console.log('action'),
handleCalendarsUpdate = () => console.log('action')

import { useSettings } from '@/@core/context/useSettings'
import SidebarLeft from '@/components/calendar/SidebarLeft'
import Calendar from '@/components/calendar/Calendar'
import CalendarWrapper from '@/@core/styles/libs/fullcalendar'
import AddEventSidebar from '@/components/calendar/AddEventSidebar'

// ** CalendarColors
//CalendarColors
const calendarsColor: any = {
  Personal: 'error',
  Business: 'primary',
  Family: 'warning',
  Holiday: 'success',
  ETC: 'info'
}

const AppCalendar = () => {
  // ** States
  const [calendarApi, setCalendarApi] = useState<null | any>(null)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false)
  const [addEventSidebarOpen, setAddEventSidebarOpen] = useState<boolean>(false)

  // ** Hooks
  const { settings } = useSettings()
  

  // ** Vars
  const leftSidebarWidth = 260
  const addEventSidebarWidth = 400
  const mdAbove = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'))

  const store = {events: [],
    selectedEvent: null,
    selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC']}

  useEffect(() => {
   // dispatch(fetchEvents(store.selectedCalendars as CalendarFiltersType[]))
  }, [])

  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen)

  const handleAddEventSidebarToggle = () => setAddEventSidebarOpen(!addEventSidebarOpen)

  return (
    <CalendarWrapper
      className='app-calendar'
      sx={{
        boxShadow: 6,
      }}
    >
      <SidebarLeft
        store={store}
        mdAbove={mdAbove}
        //dispatch={dispatch}
        calendarsColor={calendarsColor}
        leftSidebarOpen={leftSidebarOpen}
        leftSidebarWidth={leftSidebarWidth}
        handleSelectEvent={handleSelectEvent}
        handleAllCalendars={handleAllCalendars}
        handleCalendarsUpdate={handleCalendarsUpdate}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
        handleAddEventSidebarToggle={handleAddEventSidebarToggle}
      />
      <Box
        sx={{
          px: 5,
          pt: 3.75,
          flexGrow: 1,
          borderRadius: 1,
          boxShadow: 'none',
          backgroundColor: 'background.paper',
          ...(mdAbove ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {})
        }}
      >
        <Calendar
          store={store}
          //dispatch={dispatch}
          direction={'ltr'}
          updateEvent={updateEvent}
          calendarApi={calendarApi}
          calendarsColor={calendarsColor}
          setCalendarApi={setCalendarApi}
          handleSelectEvent={handleSelectEvent}
          handleLeftSidebarToggle={handleLeftSidebarToggle}
          handleAddEventSidebarToggle={handleAddEventSidebarToggle}
        />
      </Box>
      <AddEventSidebar
        store={store}
        //dispatch={dispatch}
        addEvent={addEvent}
        updateEvent={updateEvent}
        deleteEvent={deleteEvent}
        calendarApi={calendarApi}
        drawerWidth={addEventSidebarWidth}
        handleSelectEvent={handleSelectEvent}
        addEventSidebarOpen={addEventSidebarOpen}
        handleAddEventSidebarToggle={handleAddEventSidebarToggle}
      />
    </CalendarWrapper>
  )
}

export default AppCalendar
