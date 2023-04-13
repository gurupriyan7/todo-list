import { appConfig } from '../config/appConfig'

export const isProduction = () => {
  return appConfig.nodeEnv === 'production'
}
