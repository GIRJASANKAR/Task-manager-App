const mongoose=require('mongoose')
//const validator=require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')


// const gst=new Users({
//     name:'gst',
//     age:22
// })

// const chetan=new Users({
//     name:'   chetan    Tiwari   ',//-->tri remove space from both ends but not from corners..
//     age:18,

//     email:'foo@bar.com'
// })

// const abhi=new Users({
//     name:'  Abhishek  ',
//     email:'  GIRJA@1342.COM  ',
//      password:'RSofucrhgi@12$345',
//      age:25
// })

// const vaibhav=new Users({
//     name:'vaibhav',
//     age:23,
//     focus:'infinity'  -->this property did not added to the database
// })



// gst.save().then(()=>{
//     console.log(gst)
// }).catch((error)=>{
//     console.log('Error occured is',error)
// })

// abhi.save().then(()=>{
//     console.log(abhi)
// }).catch((error)=>{
//     console.log('Error occured is',error)
// })

// vaibhav.save().then(()=>{
//     console.log(vaibhav)
// }).catch((error)=>{
//     console.log('Error occured is',error)
// })

// const tasks=mongoose.model('tasks',{
//     description:{
//        type:String,
//        required:true,
//        trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })


// const focus=new tasks({
//     description:"     your focus is very low       ",
    
// })
// const study=new tasks({
//     description:"you should start studying",
//     completed:false
// })

// const bath=new tasks({
//     description:"did you bath today",
//     completed:false
// })

// const eat=new tasks({
//     description:"did you eat my friend",
//     completed:true
// })

// focus.save().then(()=>{
//     console.log(focus)
// }).catch((error)=>{
//     console.log('Error occured is',error)
// })

// study.save().then(()=>{
//     console.log(study)
// }).catch((error)=>{
//     console.log('Error occured is',error)
// })

// bath.save().then(()=>{
//     console.log(bath)
// }).catch((error)=>{
//     console.log('Error occured is',error)
// })

// eat.save().then(()=>{
//     console.log(eat)
// }).catch((error)=>{
//     console.log('Error occured is',error)
// })

