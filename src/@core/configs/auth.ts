const config = {
    meEndpoint: '/auth/me',
    loginEndpoint: '/api/hello',
    registerEndpoint: '/jwt/register',
    storageTokenKeyName: 'accessToken',
    onTokenExpiration: 'refreshToken' // logout | refreshToken
}
export default config