import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Connection Error", error);
  });


// iife
// ;import { DB_NAME } from "./constants";
// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
//         app.on('error',()=>{
//             console.log('Error',error)
//             throw err
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log('Error',error)
//         throw err
//     }
// })()
