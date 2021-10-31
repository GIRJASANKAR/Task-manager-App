const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true
     },
     completed:{
         type:Boolean,
         default:false
     }
})

taskSchema.pre('save', async function (next){
       console.log('task middleware is running before saving..')
       next()
})

const Tasks= mongoose.model('Tasks',taskSchema)

module.exports=Tasks

