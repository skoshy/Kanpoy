// @flow

export const WEB_SCHEMA = 'https'
export const WEB_URL = 'skoshy-skoshy.c9users.io'
export const WEB_PORT = process.env.PORT
export const WDS_SCHEMA = 'http'
export const WDS_URL = 'skoshy-skoshy.c9users.io'
export const WDS_PORT = 8081
export const STATIC_PATH = '/static'

export const APP_NAME = 'Hello App'

export const APP_CONTAINER_CLASS = 'js-app'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`
export const JSS_SSR_CLASS = 'jss-ssr'
export const JSS_SSR_SELECTOR = `.${JSS_SSR_CLASS}`

export const IO_CONNECT = 'connect'
export const IO_DISCONNECT = 'disconnect'
export const IO_CLIENT_HELLO = 'IO_CLIENT_HELLO'
export const IO_CLIENT_JOIN_ROOM = 'IO_CLIENT_JOIN_ROOM'
export const IO_SERVER_HELLO = 'IO_SERVER_HELLO'

export const isProd = process.env.NODE_ENV === 'production'
