import * as express from "express";
import * as cors from "cors";
import * as compression from "compression";
import * as path from "path";
import * as helmet from 'helmet'

export default class App {
  public app;
  public CURRENT_WORKING_DIR: string = process.cwd();

  constructor() {
    this.app = express();
    this.useMiddlewares();
    this.mountRoutes();
  }

  private useMiddlewares() {
    // parse body params and attache them to req.body
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    // this.app.use(cookieParser())
    this.app.use(compression());
    // secure this.apps by setting various HTTP headers
    this.app.use(helmet());
    // enable CORS - Cross Origin Resource Sharing
    this.app.use(cors());

    this.app.use(
      "/dist",
      express.static(path.join(this.CURRENT_WORKING_DIR, "dist"))
    );
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!",
      });
    });
    this.app.use("/", router);
  }
}