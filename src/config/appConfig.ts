import dotenv from 'dotenv'

dotenv.config()

export const appConfig = {
  connectionPort: process.env.PORT || 5000,
  dbConnectionUrl: process.env.MONGO_URL || "",
}
