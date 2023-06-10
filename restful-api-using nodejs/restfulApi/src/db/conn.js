import mongoose from "mongoose";

export default mongoose.connect("mongodb://127.0.0.1:27017/restApi",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (()=>{
    console.log("DB connected");
}).catch((err)=>{
   console.log(err);
})