import express from "express";
import "dotenv/config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import "./config/mongoose.js";
import cookieParser from "cookie-parser";
import mainRouter from "./routes/index.js";
import expressLayouts from "express-ejs-layouts";
import flash from "connect-flash";
import { setFlash } from "./utils/flash.js";
import session from "express-session";

const port = process.env.PORT || 5001;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(dirname(fileURLToPath(import.meta.url)), "views"));

app.use(expressLayouts);

app.use(express.static("assets"));
app.use(express.urlencoded());
app.use(cookieParser());

app.use(
  session({
    name: "code",
    secret: "something",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.use(flash());
app.use(setFlash);

app.use("/", mainRouter);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`listening on port ${port}`);
});
