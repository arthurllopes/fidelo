// ** React Import
import { ReactNode, useRef, useState } from 'react'

// ** MUI Imports
import List from '@mui/material/List'
import Box, { BoxProps } from '@mui/material/Box'
import { createTheme, responsiveFontSizes, styled, ThemeProvider } from '@mui/material/styles'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Type Import

// ** Theme Config

// ** Component Imports
import Drawer from './Drawer'
import VerticalNavItems from './VerticalNavItems'
import VerticalNavHeader from './VerticalNavHeader'
import { LayoutProps, VerticalNavItemsType } from '../../types'
import { hexToRGBA } from '@/@core/utils/hex-to-rgba'
import themeConfig from '@/@core/configs/theme'
import themeOptions from '@/@core/theme/ThemeOptions'
import { SwipeableDrawerProps } from '@mui/material'
import { useSettings } from '@/@core/context/useSettings'

// ** Theme Options

// ** Util Import

interface Props {
  navWidth: number
  navVisible: boolean
  collapsedNavWidth: number
  hidden: LayoutProps['hidden']
  navigationBorderWidth: number
  toggleNavVisibility: () => void
  //settings: LayoutProps['settings']
  children: LayoutProps['children']
  setNavVisible: (value: boolean) => void
  //saveSettings: LayoutProps['saveSettings']
  navMenuContent: (props?: any) => ReactNode
  navMenuBranding: (props?: any) => ReactNode
  menuLockedIcon: ReactNode
  verticalNavItems: VerticalNavItemsType
  navMenuProps?: Omit<SwipeableDrawerProps, 'open' | 'onOpen' | 'onClose'>
  menuUnlockedIcon: ReactNode
  afterNavMenuContent: (props?: any) => ReactNode
  beforeNavMenuContent: (props?: any) => ReactNode
}

const StyledBoxForShadow = styled(Box)<BoxProps>(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  background: `linear-gradient(${theme.palette.background.default}
     '5%'
  ,${hexToRGBA(theme.palette.background.default, 0.85)} 30%,${hexToRGBA(
    theme.palette.background.default,
    0.5
  )} 65%,${hexToRGBA(theme.palette.background.default, 0.3)} 75%,transparent)`,
  '&.scrolled': {
    opacity: 1
  }
}))

const Navigation = (props: Props) => {

  
  const {settings, saveSettings} = useSettings()
  // ** Props
  const { hidden, afterNavMenuContent, beforeNavMenuContent, navMenuContent: userNavMenuContent } = props
  
  // ** States
  const [navHover, setNavHover] = useState<boolean>(false)
  const [groupActive, setGroupActive] = useState<string[]>([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([])
  
  // ** Ref
  const shadowRef = useRef(null)
  
  // ** Var
  const { afterVerticalNavMenuContentPosition, beforeVerticalNavMenuContentPosition } = themeConfig
  
  const navMenuContentProps = {
    ...props,
    navHover,
    groupActive,
    setGroupActive,
    currentActiveGroup,
    setCurrentActiveGroup
  }


  // ** Create new theme for the navigation menu when mode is `semi-dark`
  let darkTheme = createTheme(themeOptions(settings, 'dark'))

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    darkTheme = responsiveFontSizes(darkTheme)
  }

  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  // ** Scroll Menu
  const scrollMenu = (container: any) => {
    if (beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) {
      container = hidden ? container.target : container
      if (shadowRef && container.scrollTop > 0) {
        // @ts-ignore
        if (!shadowRef.current.classList.contains('scrolled')) {
          // @ts-ignore
          shadowRef.current.classList.add('scrolled')
        }
      } else {
        // @ts-ignore
        shadowRef.current.classList.remove('scrolled')
      }
    }
  }

  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  return (
    <ThemeProvider theme={darkTheme}>
      <Drawer {...props} navHover={navHover} setNavHover={setNavHover} settings={settings}>
        <VerticalNavHeader {...props} navHover={navHover} settings={settings} saveSettings={saveSettings} />
        {(!!beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'fixed')
          ? beforeNavMenuContent(navMenuContentProps)
          : null}
        {(beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) && (
          <StyledBoxForShadow ref={shadowRef} />
        )}
        <Box sx={{position: 'relative', overflow: 'hidden' }}>
          {/* @ts-ignore */}
          <ScrollWrapper

            onScrollY={(container: any) => console.log(`scrolled to`)}
            {...(hidden
              ? {
                  onScroll: (container: any) => scrollMenu(container),
                  sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' }
                }
              : {
                  options: { wheelPropagation: false },
                  onScrollY: (container: any) => scrollMenu(container),
                  containerRef: (ref: any) => handleInfiniteScroll(ref)
                })}
          >
            {!!beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'static'
              ? beforeNavMenuContent(navMenuContentProps)
              : null}
            {!userNavMenuContent ? (
              <>
              {/*userNavMenuContent(navMenuContentProps)*/}
              </>
            ) : (
              <List className='nav-items' sx={{ pt: 0, '& > :first-child': { mt: '0' } }}>
                <VerticalNavItems
                  saveSettings={saveSettings}
                  settings={settings}
                  navHover={navHover}
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  {...props}
                />
              </List>
            )}
            {!!afterNavMenuContent && afterVerticalNavMenuContentPosition === 'static'
              ? afterNavMenuContent(navMenuContentProps)
              : null}
          </ScrollWrapper>
        </Box>
        {!!afterNavMenuContent && afterVerticalNavMenuContentPosition === 'fixed'
          ? afterNavMenuContent(navMenuContentProps)
          : null}
      </Drawer>
    </ThemeProvider>
  )
}

export default Navigation
