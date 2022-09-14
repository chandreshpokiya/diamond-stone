import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'database is not connected'));

db.once('open', (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('db is connected');
});

export default db;
