// ** MUI Theme Provider
import { deepmerge } from '@mui/utils'
import { PaletteMode, ThemeOptions } from '@mui/material'

// ** User Theme Options
//import UserThemeOptions from 'src/layouts/UserThemeOptions'

// ** Type Import
import { Settings,  } from '../context/useSettings'

// ** Theme Override Imports
import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
//import overrides from './overrides'
import typography from './typography'
import breakpoints from './breakpoints'

const themeOptions = (settings: Settings, overrideMode: PaletteMode): ThemeOptions => {
  // ** Vars
  const {  mode, themeColor } = settings

  // ** Create New object before removing user component overrides and typography objects from userThemeOptions
  const userThemeConfig: ThemeOptions = Object.assign({}, {})

  const mergedThemeConfig: ThemeOptions = deepmerge(
    {
      breakpoints: breakpoints(),
      //components: overrides(settings),
      palette: palette(mode === 'semi-dark' ? overrideMode : mode, 'default'),
      ...spacing,
      shape: {
        borderRadius: 10
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      },
      shadows: shadows(mode === 'semi-dark' ? overrideMode : mode),
      typography
    },
    userThemeConfig
  )

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...(mergedThemeConfig.palette
          ? (mergedThemeConfig as any).palette[themeColor]
          : palette(mode === 'semi-dark' ? overrideMode : mode, 'default').primary)
      }
    }
  })
}

export default themeOptions
