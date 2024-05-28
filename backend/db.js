const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true"
mongoose.set('strictQuery', true);
// const connectToMongo = () => {
//     mongoose
//       .connect(process.env.MONGO_URI)
//       .then(() => console.log("connection success"))
//       .catch((err) => console.log(err));
//   };
const connectToMongo = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    console.log(mongoUri);
    // const mongoUri = "mongodb+srv://mgarg1557:AWQn92hXHsWysDPQ@noteswebapp-db.tuniyc3.mongodb.net/?retryWrites=true&w=majority&appName=NotesWebApp-DB";
    // if (!mongoUri) {
    //   throw new Error('MONGO_URI is not defined');
    // }
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};
module.exports = connectToMongo;