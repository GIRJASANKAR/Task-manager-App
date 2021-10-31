const express=require('express')
const Task=require('../models/task')
const router=new express.Router()



router.get('/tasks',async(req,res)=>{ 
    try{
        const tasklist=await Task.find({});
          res.status(201).send(tasklist);
    }catch(e){
        res.status(500).send(e)
    }
})





router.get('/tasks/:id',async (req,res)=>{
     try{
        const _id=req.params.id
        const singletask=await Task.findById(_id)
        if(!singletask){
            return res.status(404).send(singletask)
        }
        return res.status(201).send(singletask)
     }
            
catch(e){
        res.status(500).send(e)
    }
})




router.patch('/tasks/:id',async (req,res)=>{
    const trytoupdates=Object.keys(req.body)
    const allowed=['description','completed']
    const check=trytoupdates.every((item)=>{
        return allowed.includes(item)
    })

    if(!check){
        res.status(400).send({error:'this property does not exists'})
    }
    try{
 // const updatedtask=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    const updatedtask=await Task.findById(req.params.id)

    allowed.forEach((singletask)=>{
        updatedtask[singletask]=req.body[singletask]
    })
           await updatedtask.save()
  if(!updatedtask){
    return  res.status(400).send(updatedtask)
  }
  return res.status(201).send(updatedtask)
    }catch(e){
       res.status(500).send(e)
    }
})




router.delete('/tasks/:id',async(req,res)=>{
    try{
        const deletedTask=await Task.findByIdAndDelete(req.params.id)
        if(!deletedTask){
            return res.status(400).send({error:'task does not found'})
        }
        res.status(201).send(deletedTask)
    }catch(e){
        res.send(500).send(e)
    }
})



module.exports=router
