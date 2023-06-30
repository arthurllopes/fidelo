// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Theme, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CustomRadioIcons from '@/@core/fragments/custom-radio/icons'

// ** Type Imports
/*import {
  CustomRadioBasicData,
  CustomRadioIconsData,
  CustomRadioIconsProps
} from 'src/@core/components/custom-radio/types'*/

// ** Custom Components Imports

interface IconType {
  icon: any; // CustomRadioIconsProps['icon']
  iconProps: any; // CustomRadioIconsProps['iconProps']
}

//CustomRadioIconsData[] 
const dataIcons: any = [
  {
    isSelected: true,
    value: 'standard',
    title: 'Standard',
    content: (
      <>
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 1 Week.
        </Typography>
      </>
    )
  },
  {
    value: 'express',
    title: 'Express',
    content: (
      <>
        
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 3-4 days.
        </Typography>
      </>
    )
  },
  {
    value: 'overnight',
    title: 'Overnight',
    content: (
      <>
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 1 day.
        </Typography>
      </>
    )
  }
]

const StepAddress = ({ handleNext }: { handleNext: () => void }) => {

  const initialIconSelected: string = dataIcons.filter((item: any) => item.isSelected)[
    dataIcons.filter((item: any) => item.isSelected).length - 1
  ].value

  // ** States
  const [selectedIconRadio, setSelectedIconRadio] = useState<string>(initialIconSelected)

  // ** Hook
  const theme = useTheme()
  const breakpointMD = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'lg'))

  const handleIconRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedIconRadio(prop)
    } else {
      setSelectedIconRadio((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8}>
        <Typography sx={{ mb: 4 }}>Primeiro passo</Typography>
        <Box>CONTEUDO</Box>
        <Typography sx={{ mt: 9, mb: 4 }}>Segundo passo</Typography>
        <Grid container spacing={4}>
          {dataIcons.map((item: any, index: number) => (
            <CustomRadioIcons
              key={index}
              data={dataIcons[index]}
              //icon={icons[index].icon}
              selected={selectedIconRadio}
              name='custom-radios-delivery'
              gridProps={{ sm: 4, xs: 12 }}
              //iconProps={icons[index].iconProps}
              handleChange={handleIconRadioChange}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box sx={{ mb: 4, borderRadius: 1, border: theme => `1px solid ${theme.palette.divider}` }}>
          <CardContent>
            <Typography sx={{ mb: 4, fontWeight: 600 }}>Sidebar title</Typography>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
            <Typography sx={{ mb: 4, fontWeight: 600 }}>Price Details</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  mb: 2,
                  gap: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                  Order Total
                </Typography>
                <Typography variant='body2'>$1198.00</Typography>
              </Box>
              <Box
                sx={{
                  gap: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='body2' sx={{ color: 'text.primary' }}>
                  Delivery Charges
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Typography variant='body2' sx={{ mr: 2, textDecoration: 'line-through', color: 'text.disabled' }}>
                    $5.00
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardContent sx={{ py: theme => `${theme.spacing(3.5)} !important` }}>
            <Box
              sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Typography sx={{ fontWeight: 600 }}>Total</Typography>
              <Typography sx={{ fontWeight: 600 }}>$1198.00</Typography>
            </Box>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', ...(breakpointMD ? { justifyContent: 'flex-end' } : {}) }}>
          <Button fullWidth={!breakpointMD} variant='contained' onClick={handleNext}>
            Place Order
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default StepAddress
