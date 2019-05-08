import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

import { Routes } from './routes/'
class App {
  public app: express.Application
  public routePrv: Routes = new Routes()

  constructor() {
    this.app = express()
    this.config()
    this.routePrv.routes(this.app)
    //this.psqlSetup()
  }

  private config(): void {
    this.app.use(cors())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  // private psqlSetup(): void {

  // }
}

export default new App().app
