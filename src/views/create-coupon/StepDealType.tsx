// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Chip } from '@mui/material'
import CustomRadioIcons from '@/@core/fragments/custom-radio/icons'

// ** Type Imports
//import { CustomRadioIconsData, CustomRadioIconsProps } from 'src/@core/components/custom-radio/types'

// ** Custom Components Imports
//import CustomChip from 'src/@core/components/mui/chip'
//import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

interface IconType {
  icon: any; //CustomRadioIconsProps['icon']
  iconProps: any; //CustomRadioIconsProps['iconProps']
}
//CustomRadioIconsData[]
const data: any = [
  {
    isSelected: true,
    value: 'percentage',
    title: 'Percentage',
    content: 'Create a deal which offer uses some % off (i.e 5% OFF) on total.'
  },
  {
    value: 'flat-amount',
    title: 'Flat Amount',
    content: 'Create a deal which offer uses flat $ off (i.e $5 OFF) on the total.'
  }
]


const Img = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '100%'
})

const StepDealType = () => {

  const initialIconSelected: string = data.filter((item: any) => item.isSelected)[
    data.filter((item: any) => item.isSelected).length - 1
  ].value

  // ** States
  const [selectedRadio, setSelectedRadio] = useState<string>(initialIconSelected)

  // ** Hook
  const theme = useTheme()

  const icons: IconType[] = [
    {
      icon: 'mdi:tag-outline',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'mdi:currency-usd',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
  ]

  const handleRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedRadio(prop)
    } else {
      setSelectedRadio((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={5}>
      {/*<Grid item xs={12}>
        <Box sx={{ borderRadius: 1, display: 'flex', border: `1px solid ${theme.palette.divider}` }}>
          <Img alt='illustration' src='/images/pages/shopping-girl.png' />
        </Box>
  </Grid>*/}
      {data.map((item: any, index: any) => (
        <CustomRadioIcons
          key={index}
          data={data[index]}
          icon={icons[index].icon}
          selected={selectedRadio}
          name='custom-radios-deal'
          gridProps={{ sm: 4, xs: 12 }}
          handleChange={handleRadioChange}
          iconProps={icons[index].iconProps}
        />
      ))}
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <TextField type='number' label='Discount' placeholder='25' />
          <FormHelperText>{selectedRadio === 'flat-amount' ? 'Enter the flat-amount. 10 = R$10' : 'Enter the discount percentage. 10 = 10%'}</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default StepDealType
