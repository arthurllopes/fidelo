// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme, useTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Type Import
//import { LayoutProps } from 'src/@core/layouts/types'

const LinkStyled = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.primary.main
  }))

interface Props {
  //settings: LayoutProps['settings']
  //saveSettings: LayoutProps['saveSettings']
  footerStyles?: any; // NonNullable<LayoutProps['footerProps']>['sx']
  footerContent?: any; // NonNullable<LayoutProps['footerProps']>['content']
}

const Footer = (props: Props) => {
    const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  // ** Props
  const { footerStyles, footerContent: userFooterContent } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  //const { skin, footer, layout, contentWidth } = settings

 /* if (footer === 'hidden') {
    return null
  }*/

  return (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
          bottom: 0,
          position: 'sticky',
           px: [4, 6],
        ...footerStyles
      }}
    >
      <Box
        className='footer-content-container'
        sx={{
          width: '100%',
          py: theme.spacing(4),
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
             backgroundColor: 'background.paper',
                px: [5, 6],
                '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` },
                  
                boxShadow: 6 
           
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <LinkStyled target='_blank' href='https://pixinvent.com/'>
          Pixinvent
        </LinkStyled>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <LinkStyled target='_blank' href='https://themeforest.net/licenses/standard'>
            License
          </LinkStyled>
          <LinkStyled target='_blank' href='https://1.envato.market/pixinvent_portfolio'>
            More Themes
          </LinkStyled>
          <LinkStyled
            target='_blank'
            href='https://demos.pixinvent.com/materialize-nextjs-admin-template/documentation'
          >
            Documentation
          </LinkStyled>
          <LinkStyled target='_blank' href='https://pixinvent.ticksy.com/'>
            Support
          </LinkStyled>
        </Box>
      )}
    </Box>
      </Box>
    </Box>
  )
}

export default Footer
