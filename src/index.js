//npm run dev -->for nodemon
// resource creation 
// const User=require('./models/user')
// const Task=require('./models/task')
const express=require('express')
require('./db/mongoose')
//const bcrypt=require('bcryptjs')
//const Tasks = require('./models/task') 
const usersRouter=require('../src/routers/users')
const tasksRouters=require('../src/routers/tasks')
const app=express()
const Task=require('../models/task')
//const port = 3000 //process.env.PORT ||-->for deployment on heroku
app.use(express.json())
app.use(usersRouter)
app.use(tasksRouters)



app.post('/tasks',async (req,res)=>{
    const newtask= new Task(req.body); 
  
try{
      await newtask.save();
       res.status(201).send(newtask);

}catch(e){
    res.status(400).send(e)
}})


app.listen(3000,()=>{
    console.log('server is running...')
})



// const myfunction=async ()=>{
//     const plainpassword='girja@123'
//     const hashedpasswords=await bcrypt.hash(plainpassword,8) //numbers of round we want to encrypt algorithm
//     console.log(plainpassword)
//     console.log(hashedpasswords)
//     const isBothEqual=await bcrypt.compare(plainpassword,hashedpasswords)
//     return isBothEqual
// }
// myfunction().then((a)=>{
//     console.log(a)
// }).catch((e)=>{
//     console.log(e)
// })



























































// app.post('/users',(req,res)=>{
//     //  console.log(req.body)  //using postman i have send this data and we know how to grab it
//     //  res.send("testing...")
//     const ab=new User(req.body)
//     ab.save().then(()=>{
//         res.status(201).send(ab)
//     }).catch((error)=>{
//         res.status(400).send(error)
//         //res.send(error)
//     })
// })



// app.post('/tasks',(req,res)=>{
    
//     const write=new Task(req.body) 
//     write.save().then(()=>{
//         res.status(201).send(write)
//     }).catch((error)=>{
//         res.status(400).send(error)
//         //res.send(error)
//     })
// })



// Reading the creation -->using find,findone ,and findone by id for users and tasks

// app.get('/users',(req,res)=>{
//     User.find({}).then((buddy)=>{
//         res.status(201).send(buddy)
//     }).catch((error)=>{
//         res.status(400).send(error)
//         //res.send(error)
//     })
// })



    
// app.get('/users/:id',(req,res)=>{
//     const _id=req.params.id
//     User.findById(_id).then((mila)=>{
//         if(!mila){
//             return res.status(404).send(mila)
//         }
//        res.status(201).send(mila)
//     }).catch((eroor)=>{
//         res.status(400).send(error)
//     })
// })



// app.get('/tasks',(req,res)=>{
//     Task.find({}).then((alltask)=>{
//         res.status(201).send(alltask)
//     }).catch((error)=>{
//         res.status(500).send()
//     })
// })

// app.get('/tasks/:id',(req,res)=>{
//     const _id=req.params.id
//     Task.findById(_id).then((single)=>{
//         if(!single){
//             return res.status(404).send()
//         }
//         res.status(201).send(single)
//     }).catch((error)=>{
//         res.status(500).send(error)
//     })

// })

//first rest api we able to send daata via http request off to the serverr using a predefined operations
// we are able to perform some sort of information on the database

//httpstatuses.com 200-sucess, 400-errors , 500-server