// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import List, { ListProps } from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Icon from '@/@core/fragments/icon'

// ** Custom Components Imports

// ** Icon Imports

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  padding: 0,
  '& .MuiListItem-root': {
    padding: theme.spacing(5),
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6
    },
    '&:last-of-type': {
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6
    },
    '&:not(:last-of-type)': {
      borderBottom: 0
    },
    '& .MuiListItemText-root': {
      marginTop: 0,
      marginBottom: theme.spacing(4),
      '& .MuiTypography-root': {
        fontWeight: 500
      }
    },
    '& .remove-item': {
      top: '0.5rem',
      right: '0.625rem',
      position: 'absolute',
      color: theme.palette.text.disabled
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}))

const HorizontalList = styled(List)<ListProps>(({ theme }) => ({
  padding: 0,
  display: 'flex',
  borderRadius: 6,
  border: `1px solid ${theme.palette.divider}`,
  '& .MuiListItem-root': {
    padding: theme.spacing(5),
    '&:not(:last-of-type)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    '& .MuiListItem-root': {
      '&:not(:last-of-type)': {
        borderRight: 0,
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  }
}))

const StepConfirmation = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant='h5' sx={{ mb: 4 }}>
            Thank You! 😇
          </Typography>
          <Typography sx={{ mb: 4, color: 'text.secondary' }}>
            Your order{' '}
            <Box
              href='/'
              component={Link}
              onClick={e => e.preventDefault()}
              sx={{ color: 'primary.main', textDecoration: 'none' }}
            >
              #1536548131
            </Box>{' '}
            has been placed!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <HorizontalList>
          <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 1.5, display: 'flex' }}>
                <Icon icon='mdi:map-marker-outline' fontSize={20} />
              </Box>
              <Typography sx={{ fontWeight: 600 }}>Shipping</Typography>
            </Box>
            <Typography sx={{ color: 'text.secondary' }}>John Doe</Typography>
            <Typography sx={{ color: 'text.secondary' }}>4135 Parkway Street,</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Los Angeles, CA 90017,</Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>USA</Typography>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>+123456789</Typography>
          </ListItem>
          <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 1.5, display: 'flex' }}>
                <Icon icon='mdi:credit-card-outline' fontSize={20} />
              </Box>
              <Typography sx={{ fontWeight: 600 }}>Billing Address</Typography>
            </Box>
            <Typography sx={{ color: 'text.secondary' }}>John Doe</Typography>
            <Typography sx={{ color: 'text.secondary' }}>4135 Parkway Street,</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Los Angeles, CA 90017,</Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>USA</Typography>
            <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>+123456789</Typography>
          </ListItem>
          <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 1.5, display: 'flex' }}>
                <Icon icon='mdi:archive-outline' fontSize={20} />
              </Box>
              <Typography sx={{ fontWeight: 600 }}>Shipping Method</Typography>
            </Box>
            <Typography sx={{ mb: 4, fontWeight: 600, color: 'text.secondary' }}>Preferred Method:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Standard Delivery</Typography>
            <Typography sx={{ color: 'text.secondary' }}>(Normally 3-4 business days)</Typography>
          </ListItem>
        </HorizontalList>
      </Grid>
      <Grid item xs={12} md={8} xl={9}>
        
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        
      </Grid>
    </Grid>
  )
}

export default StepConfirmation
