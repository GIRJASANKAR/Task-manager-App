const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
// creating a schema ->just pass that object

const userSchema=new mongoose.Schema({

    name:{
       type:String,
       required:true,//-->it is required field 
        trim:true
     },      // sanitization-- use trim to remove the extra spaces if any
    
     age:{
     type:Number , //-->  it is opctional
     default:1,
     validate(value){
          if(value<=0){
               throw new Error('Age must be positive ')
          }
     }
     
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,  //sanitization
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is wrong brother ')
            }
        }
    },

    password:{
        type:String,
         validate(value){
           if(!validator.isStrongPassword){
     throw new Error("missing: minlenth is 8 minLowercase 1 minuppercase 1 minstymbol 1")
           }
         }
    }
})


userSchema.statics.findByCredentials=async(email,password)=>{
    const user= await Users.findOne({email})
    if(!user){
        throw new error('user does not find..')
    }
  
    const isMatch=await bcrypt.compare(password,user.password)
     
    if(!isMatch){
        throw new Error('password does not match...')
    }

    return user

}


//--use a method on user schema to set a middlewares in schema---

//pre for before an event and post for after a event like validation , save..

// two arguments 1t-->event we want to use 2nd-->a standard function not an arrow function because it bind this.
// we pass next as argument in function

userSchema.pre('save', async function (next) {
   const user=this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
  

   next()//>we simply call next when we are done because its a asyncrounous function .
})







const Users= mongoose.model('Users',userSchema)

// here to create a model we pass Users and object in moongoose .model
// but moongoose converts in into a schema  -->so pass that into new moongoose.Schema
//and pass that schema into moongoose.model
module.exports=Users