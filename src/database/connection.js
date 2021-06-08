import mongoose from 'mongoose';

function connection() {
  const databaseURI = 'mongodb://127.0.0.1:27017/af-database';

  return mongoose.connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Database Synced');
  })
  .catch((error) => {
    console.log('Database Error: ' + error.message);
  })
}

export default connection;