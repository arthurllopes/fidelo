// ** React Imports
import { ReactNode } from 'react'

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

//authContext
import AuthGuard from '@/@core/components/auth/AuthGuard'
import { AuthProvider } from '@/@core/context/useAuth'
import UserLayout from '@/@core/layout/UserLayout'
import ThemeComponent from '@/@core/theme/ThemeComponent'
import { SettingsConsumer, SettingsProvider } from '@/@core/context/useSettings'
import FallbackSpinner from '@/@core/fragments/spinner'
import GuestGuard from '@/@core/components/auth/GuestGuard'
import themeConfig from '@/@core/configs/theme'

import NProgress from 'nprogress'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'


type ExtendedAppProps = AppProps & {
  Component: NextPage
  //emotionCache: EmotionCache
}
type GuardProps = {
  authGuard: boolean
  guestGuard: boolean
  children: ReactNode
}

//const clientSideEmotionCache = createEmotionCache()
// Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

//Protected route
//verifica se a pagina precisa de auth, se nao precisar retorna o children
//se precisar verifica a a auth
const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<FallbackSpinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<FallbackSpinner />}>{children}</AuthGuard>
  }
}

const App = (props: ExtendedAppProps) => {

  const { Component, /*emotionCache = clientSideEmotionCache,*/ pageProps } = props
  const getLayout =
    Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

    const setConfig = Component.setConfig ?? undefined

    //para usuario
    //todas as paginas necessitam auth ao menos que desabilite
    const authGuard = Component.authGuard ?? true

    //para o visitante
    //padrao é o visitante não poder ver nenhuma pagina, se quiser é necessário habilitar
    //pagina de login e de cadastro por exemplo
    const guestGuard = Component.guestGuard ?? false

    //userAbility
    //const aclAbilities = Component?.acl ?? defaultACLObj

 return (
    <>
      {/*<CacheProvider value={emotionCache}>*/}
        
        <Head>
          <title>{`- Material Design React Admin Template`}</title>
          <meta
            name='description'
            content={`Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
          />
          <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' /> 
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>

        <AuthProvider>
         <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
              return (
                  <ThemeComponent settings={settings}>
                    <Guard authGuard={authGuard} guestGuard={guestGuard} >
                      {/*<AclGuard aclAbilities={aclAbilities} authGuard={authGuard}>*/}
                        {getLayout(<Component {...pageProps} />)}
                      {/*</AclGuard>*/}
                    </Guard>
                    {/*<ReactHotToast>
                      <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                      </ReactHotToast>*/}
                  </ThemeComponent>
               )
              }}
            </SettingsConsumer>
            </SettingsProvider>
        </AuthProvider>
      {/*</CacheProvider>*/}

    </>)
}
export default App
