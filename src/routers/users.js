const express=require('express')
const Users = require('../models/user')
const User=require('../models/user')
const router=new express.Router()



// resource creation using async await
router.post('/users',async (req,res)=>{
    const gst = new User(req.body)
     try{
         await gst.save()
         res.status(201).send(gst)
     }
      catch(e){
          res.status(400).send(e)
      }  
    })
    
    router.post('/users/login',async (req,res)=>{
        try{
             const user=await User.findByCredentials(req.body.email,req.body.password)
             res.send(user)
             
        }catch(e){
            console.log(e)
            res.status(500).send(e)
        }
    })


    

    router.get('/users',async (req,res)=>{
       
        
        try{
         const userlist=  await User.find({})
         res.status(201).send(userlist)
        }
             
     catch(e){
         res.status(500).send(e)
     }
    
    })
    
    
    router.get('/users/:id',async (req,res)=>{
        try{
        const _id=req.params.id;
        const thatuser=await User.findById(_id)
        if(!thatuser){
            return res.status(404).send(thatuser)
        }
        return res.status(201).send(thatuser)
    }  
    catch(e){
        res.status(500).send(e)
    }
    })
    


    //patch is used for update --new is used for latest user --validator --to check before enter data into database everthing is correct
    // req.params.body-->for id and req.body-->for new data
    router.patch('/users/:id',async (req,res)=>{
        const trytoupdate=Object.keys(req.body) //an array of keys which u try to update
        const canOnlyUpdate=['name','email','password','age'] //which are allowed
        // every returns true if all true else false
        const isValied=trytoupdate.every((updates)=>{  
            return canOnlyUpdate.includes(updates)
        })
        if(!isValied) {
          return res.status(400).send({error:'invalid updates'})
        }
    
      try{
//findByIdAndUpdate bypass mongoose and middlewares and directly done changes in databases so..
     const updateduser=await Users.findById(req.params.id) 
     // and we iterate over to canonlyupdates and find which property you are trying to update
     // now middleware is work properly
            canOnlyUpdate.forEach((updates)=>{
             updateduser[updates]=req.body[updates]
     })

        await updateduser.save()
   // const updateduser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
      if(!updateduser){
         return res.status(400).send(updateduser)
      }
      return res.status(201).send(updateduser)
      }catch(e){
           res.send(500).send(e)
      }
    })
    
    

    
    router.delete('/users/:id',async (req,res)=>{
        try{
            const deletedUser= await User.findByIdAndDelete(req.params.id)
            if(!deletedUser){
                return res.status(400).send({error:'there is nothing to delete'})
            }
            res.status(200).send(deletedUser)
        }
       catch (e){
           res.status(500).send(e)
       }
    
    })


module.exports=router


