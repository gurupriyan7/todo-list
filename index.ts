
import app from "./src/app"
import { appConfig } from "./src/config/appConfig"


const port = appConfig.connectionPort
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})