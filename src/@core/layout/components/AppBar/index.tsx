// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'
// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import IconifyIcon from '@/@core/fragments/icon'
import ModeToggler from '@/@core/fragments/mode_toggler/ModeToggler'
import { useSettings } from '@/@core/context/useSettings'
import { hexToRGBA } from '@/@core/utils/hex-to-rgba'
import { LayoutProps } from '../../types'


interface Props {
  hidden: LayoutProps['hidden']
  toggleNavVisibility: () => void
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  padding: '0 !important',
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition: 'padding .25s ease-in-out, box-shadow .25s ease-in-out, background-color .25s ease-in-out'
}))

const LayoutAppBar = (props: Props) => {
    //NotificationsType[]
    const notifications: any[] = [
        {
          meta: 'Today',
          avatarAlt: 'Flora',
          title: 'Congratulation Flora! 🎉',
          avatarImg: '/images/avatars/4.png',
          subtitle: 'Won the monthly best seller badge'
        },
        {
          meta: 'Yesterday',
          avatarColor: 'primary',
          subtitle: '5 hours ago',
          avatarText: 'Robert Austin',
          title: 'New user registered.'
        },
        {
          meta: '11 Aug',
          avatarAlt: 'message',
          title: 'New message received 👋🏻',
          avatarImg: '/images/avatars/5.png',
          subtitle: 'You have 10 unread messages'
        },
        {
          meta: '25 May',
          title: 'Paypal',
          avatarAlt: 'paypal',
          subtitle: 'Received Payment',
          avatarImg: '/images/misc/paypal.png'
        },
        {
          meta: '19 Mar',
          avatarAlt: 'order',
          title: 'Received Order 📦',
          avatarImg: '/images/avatars/3.png',
          subtitle: 'New order received from John'
        },
        {
          meta: '27 Dec',
          avatarAlt: 'chart',
          subtitle: '25 hrs ago',
          avatarImg: '/images/misc/chart.png',
          title: 'Finance report has been generated'
        }
      ]
      //ShortcutsType[]
      const shortcuts: any[]  = [
        {
          title: 'Calendar',
          url: '/apps/calendar',
          subtitle: 'Appointments',
          icon: 'mdi:calendar-month-outline'
        },
        {
          title: 'Invoice App',
          url: '/apps/invoice/list',
          subtitle: 'Manage Accounts',
          icon: 'mdi:receipt-text-outline'
        },
        {
          title: 'Users',
          url: '/apps/user/list',
          subtitle: 'Manage Users',
          icon: 'mdi:account-outline'
        },
        {
          url: '/apps/roles',
          title: 'Role Management',
          subtitle: 'Permissions',
          icon: 'mdi:shield-check-outline'
        },
        {
          url: '/',
          title: 'Dashboard',
          icon: 'mdi:chart-pie',
          subtitle: 'User Dashboard'
        },
        {
          title: 'Settings',
          icon: 'mdi:cog-outline',
          subtitle: 'Account Settings',
          url: '/pages/account-settings/account'
        },
        {
          title: 'Help Center',
          subtitle: 'FAQs & Articles',
          icon: 'mdi:help-circle-outline',
          url: '/pages/help-center'
        },
        {
          title: 'Dialogs',
          subtitle: 'Useful Dialogs',
          icon: 'mdi:window-maximize',
          url: '/pages/dialog-examples'
        }
      ]

  // ** Hooks
  const theme = useTheme()
  //const scrollTrigger = useScrollTrigger({ threshold: 0, disableHysteresis: true })
  const { settings, saveSettings } = useSettings()
  // ** Vars
  const { appBar, appBarBlur, contentWidth } = settings

  const appBarFixedStyles = () => {
    return {
      px: `${theme.spacing(6)} !important`,
      boxShadow: 3,
      ...(appBarBlur && { backdropFilter: 'blur(8px)' }),
      backgroundColor: hexToRGBA(theme.palette.background.paper, appBarBlur ? 0.9 : 1),
    }
  }
  
  if (appBar === 'hidden') {
    return null
  }
  let userAppBarStyle = {}
  /*if (appBarProps && appBarProps.sx) {
    userAppBarStyle = appBarProps.sx
  }*/
  const userAppBarProps = Object.assign({}, {})
  //const userAppBarProps = Object.assign({}, appBarProps)

  //delete userAppBarProps.sx

  return (
    <AppBar
      elevation={0}
      color='default'
      className='layout-navbar'
      sx={{ ...userAppBarStyle }}
      position={ 'static'}
      {...userAppBarProps}
    >
      <Toolbar
        className='navbar-content-container'
        sx={{
          //...(appBar === 'fixed' && scrollTrigger && { ...appBarFixedStyles() }),
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {props.hidden && !settings.navHidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={props.toggleNavVisibility}>
            <IconifyIcon icon='mdi:menu' />
          </IconButton>
        ) : null}
        {/*auth.user && <Autocomplete hidden={hidden} settings={settings} />*/}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {/*<LanguageDropdown settings={settings} saveSettings={saveSettings} />*/}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        {/*auth.user && (
          <>
            <ShortcutsDropdown settings={settings} shortcuts={shortcuts} />
            <NotificationDropdown settings={settings} notifications={notifications} />
            <UserDropdown settings={settings} />
          </>
        )*/}
      </Box>
    </Box>
      </Toolbar>
    </AppBar>
    
  )
}

export default LayoutAppBar
