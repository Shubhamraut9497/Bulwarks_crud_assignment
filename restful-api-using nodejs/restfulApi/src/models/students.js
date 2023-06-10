import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true,
       minLength:3,
    },
    postName:{
        type:String,
        required:true,
    },
    dateOfApplication:{
        type:Date,
    },
    subject:{
        type:String,
    },
    section:{
        type:String,
    },
    dob:{
        type:Date,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    },
    address:{
        type:String,
    },
    phone_landline:{
        type:Number,
        min:10,
    },
    mobileNo:{
        type:Number,
        min:10,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    MaritalStatus:{
        type:String,
    },
    marriageDate:{
        type:String,
    },
    Fathers_spouseName:{
        type:String,
    },
    occupation:{
        type:String,
    },
    organization:{
        type:String,
    },
    noOfChildren:{
        type:Number,
    },
    childrenAge:{
        type:Number,
    },
    collegeName:{
        type:String,
    },

});
//we will create a new collection
 const Student=new mongoose.model("Student",studentSchema)
 export default Student;