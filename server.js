import express from 'express';
import 'dotenv/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import './config/mongoose.js';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/index.js';

const port = process.env.PORT || 5001;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(dirname(fileURLToPath(import.meta.url)), 'views'));

app.use(express.static('assets'));
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/', mainRouter);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`listening on port ${port}`);
});
