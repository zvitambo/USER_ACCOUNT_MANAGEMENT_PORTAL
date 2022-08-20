import mongoose from "mongoose";


export default async() => {
     
      try {
        await mongoose.connect("mongodb://localhost/users");
        //   await mongoose.connect(DB_URL, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        //   });
        console.log("Db Connected");
      } catch (error) {
        console.log("Error ============");
        console.log(error);
        process.exit(1);
      }

    // await mongoose.connect("mongodb://localhost/users", {
    //   useUnifiedTopology: true,
    // });
}