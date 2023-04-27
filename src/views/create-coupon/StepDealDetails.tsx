// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControlLabel from '@mui/material/FormControlLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Custom Components Imports

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'
import { Switch } from '@mui/material'


// ** Types

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

const offeredItemsArray = [
  'Apple iPhone 12 Pro Max (256GB)',
  'Apple iPhone 12 Pro (512GB)',
  'Apple iPhone 12 Mini (256GB)',
  'Apple iPhone 11 Pro Max (256GB)',
  'Apple iPhone 11 (64GB)',
  'OnePlus Nord CE 56 (128GB)'
]

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef((props: PickerProps, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`

  return <TextField fullWidth inputRef={ref} label={props.label || ''} {...props} value={value} />
})

const StepDealDetails = () => {
  // ** State
  const [endDate, setEndDate] = useState<any>(null)
  const [startDate, setStartDate] = useState<any>(null)
  const [offeredItems, setOfferedItems] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof offeredItems>) => {
    const {
      target: { value }
    } = event
    setOfferedItems(typeof value === 'string' ? value.split(',') : value)
  }

  const handleDateChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Deal Title' placeholder='Black Friday sale, 25% off' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label='Deal Code' placeholder='25PEROFF' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DatePicker
          selectsRange
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          id='date-range-picker'
          onChange={handleDateChange}
          shouldCloseOnSelect={false}
          customInput={
            <CustomInput label='Deal Duration' start={startDate as Date | number} end={endDate as Date | number} />
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth type='number' label='Max Users' placeholder='500' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth type='number' label='Minimum Cart Amount' placeholder='$99' />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel control={<Switch checked={true} />} label='Limit this discount to a single-use per customer?' />
      </Grid>
    </Grid>
  )
}

export default StepDealDetails
