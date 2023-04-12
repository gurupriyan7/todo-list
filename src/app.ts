import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { appConfig } from './config/appConfig'
import taskRoutes from "./router/tasksRouter"


const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose
  .connect(appConfig.dbConnectionUrl)
  .then(() => {
    console.log('dataBase connected')
  })
  .catch((error) => {
    console.log(`an error with database connection ${error}`)
  })

  app.use("/api/tasks",taskRoutes)

app.use((req :Request,res:Response)=>{
  const error = new Error("not found")

  return res.status(404).json({message:error.message})
})

export default app
