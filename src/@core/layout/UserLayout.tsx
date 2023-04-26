// ** React Imports
import { ReactNode, useEffect, useRef, useState } from 'react'
import { BoxProps, Theme, styled, useMediaQuery } from '@mui/material'
import Footer from '../components/footer'
import Navigation from './components/Navigation'
import LayoutAppBar from './components/AppBar'
import themeConfig from '../configs/theme'
import { useSettings } from '../context/useSettings'
import { LayoutProps } from './types'
import navigation from './components/Navigation/navigation_items'

// ** MUI Imports
/*import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import Layout from 'src/@core/layouts/Layout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/vertical'
import HorizontalNavItems from 'src/navigation/horizontal'

// ** Component Import
// Uncomment the below line (according to the layout type) when using server-side menu
// import ServerSideVerticalNavItems from './components/vertical/ServerSideNavItems'
// import ServerSideHorizontalNavItems from './components/horizontal/ServerSideNavItems'

import VerticalAppBarContent from './components/vertical/AppBarContent'
import HorizontalAppBarContent from './components/horizontal/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

*/interface Props {
  children: ReactNode
}

const UserLayout = ( props: Props) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  // ** Vars for server side navigation
  // const { menuItems: verticalMenuItems } = ServerSideVerticalNavItems()
  // const { menuItems: horizontalMenuItems } = ServerSideHorizontalNavItems()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  /*
  if (hidden && settings.layout === 'horizontal') {
    settings.layout = 'vertical'
  }*/
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  
  // ** Ref
  const isCollapsed = useRef(settings.navCollapsed)
  
   useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: 'vertical' })
        isCollapsed.current = true
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({ ...settings, navCollapsed: true, layout: settings.lastLayout })
        isCollapsed.current = false
      } else {
        if (settings.lastLayout !== settings.layout) {
          saveSettings({ ...settings, layout: settings.lastLayout })
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden])

  const LayoutWrapper = styled('div')({
    height: '100%',
    display: 'flex'
  })
  
  const MainContentWrapper = styled('div')<BoxProps>({
    flexGrow: 1,
    minWidth: 0,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  })
  
  const ContentWrapper = styled('main')(({ theme }) => ({
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(6),
    transition: 'padding .25s ease-in-out',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  }))

 // const {  children, scrollToTop, footerProps, contentHeightFixed, verticalLayoutProps } = props
  const { navHidden, contentWidth } = settings
  const { navigationSize, disableCustomizer, collapsedNavigationSize } = themeConfig

  const navWidth = navigationSize
  const navigationBorderWidth = 0
  const collapsedNavWidth = collapsedNavigationSize
  
  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(false)

   // ** Toggle Functions
   const toggleNavVisibility = () => setNavVisible(!navVisible)


  return (
    <LayoutWrapper className='layout-wrapper'>
        {/* Navigation Menu */}
        {navHidden && !(navHidden && settings.lastLayout === 'horizontal') ? null : (
          <Navigation
            hidden={hidden}
            navWidth={navWidth}
            navVisible={navVisible}
            setNavVisible={setNavVisible}
            collapsedNavWidth={collapsedNavWidth}
            toggleNavVisibility={toggleNavVisibility}
            navigationBorderWidth={navigationBorderWidth}
            navMenuContent={() => <></>}
            navMenuBranding={() => <></>}
            menuLockedIcon={<></>}
            verticalNavItems={navigation()}
           // navMenuProps={'open'}
            menuUnlockedIcon={<></>}
            afterNavMenuContent={() => <></>}
            beforeNavMenuContent={() => <></>}
            {...props}
          />
        )}
        <MainContentWrapper
          className='layout-content-wrapper'
        >
          {/* AppBar Component */}
          <LayoutAppBar
            toggleNavVisibility={toggleNavVisibility}
            hidden={hidden}
          />

          {/* Content */}
          <ContentWrapper
            className='layout-page-content'
            sx={{
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' }
            }}
          >
          {props.children}
        </ContentWrapper>

          {/* Footer Component*/}
          <Footer /> 
        </MainContentWrapper>
      </LayoutWrapper>  
  )
}

export default UserLayout
