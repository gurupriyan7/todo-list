import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { appConfig } from './config/appConfig'
import taskRoutes from './router/tasksRouter'
import userRoutes from './router/userRouter'
import { errorHandler } from './middleWares/errorHandler'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose
  .connect(appConfig.dbConnectionUrl)
  .then(() => {
    console.log('dataBase connected')
  })
  .catch((error) => {
    console.log(`an error with database connection ${error}`)
  })

app.use('/api/tasks', taskRoutes)
app.use('/api/user', userRoutes)

app.use(errorHandler)


export default app
