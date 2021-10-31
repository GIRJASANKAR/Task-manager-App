// CRUD OPERATIONS
//  const mongodb =require('mongodb') //what comes back is an object
// // // initilize the collection MONGO_CLIENT
// const MongoClient=mongodb.MongoClient
// // // object id to generate id
// const ObjectID=mongodb.ObjectId


//we can also destructure these things
const {MongoClient,ObjectID}= require('mongodb')


// we have to define connection url to the database to connect to
const connectionURL='mongodb://127.0.0.1:27017'
//database name
const databaseName='task-manager'


// // object id to generate id
// const id=new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id)  // id is stored in the binary form
// console.log(id.id.length)  
// console.log(id.toHexString().length)  // it is converted to string from binary so original length is 12 but when it is converted to string its length is 24.



 //url and an opction object so that the connection url is parsed correctly
MongoClient.connect(connectionURL,{ useNewUrlParser:true} ,(error,client)=>{
     if(error){
       return  console.log('unable to connect to database')
     }
      //console.log('connection sucessful...')
     const db= client.db(databaseName) //it gives us a database refrence
     //it is an asyncronous operation so u have to use a callback if things will fail..
     // the result value have many things such that object id 

    // db.collection('users').insertOne({
    //   //   _id:id,
    //     name:'kushagra',
    //     age:23
    // },(error,result)=>{
    //      if(error){
    //          return console.log('unable to insert users..')
    //      }
    //      console.log(result.insertedId) // it contain all the documents
    // })
  

    // db.collection('users').insertMany([
    //     {name:'vishaal',age:54},{name:'abhishek',age:34},{name:'shailu',age:22}
    // ],(error,result)=>{
    //         if(error){
    //            return console.log('inserted many items')
    //         }
    //         console.log(result)
    // })


    // db.collection('tasks').insertMany([
    //     {description:"happy",completed:false},{description:"satisfaction",completed:true},
    //     {description:"hard-work",completed:false},{description:"sleeping",completed:true}
    // ],(error,result)=>{
    //     if(error){
    //       return console.log('something is wrong with inserting data in new collection')
    //     }
    //     console.log(result)
    // })


    //if you want to find with objects then you have to pass that object in new ObjectID(id)

    // db.collection('users').findOne({name:'vishaal',age:54},(error,result)=>{
    //      if(error){
    //        return console.log('find sucessfully...')
    //      }
    //      console.log(result)
    // })

 
    //if you want to find multiple seaarch terms then...
// .find will give you a cursor it is a pointer to that in the database


    // db.collection('users').find({name:'Girja'}).toArray((error,result)=>{
    //         if(error){
    //         return console.log('Sorry i am not able to get the data')
    //         }
    //         console.log(result)

    // })
    

//  db.collection('tasks').findOne({_id:ObjectID("61570ce785b668b9462dd6ad")},(error,result)=>{
//    if(error){
//    return console.log("can't able to find that task")}
//    console.log(result)
//  })

  // db.collection('tasks').find({completed:false}).toArray((error,result)=>{
  //   if(error){
  //     return console.log("can't able to return that array")}
  //     console.log(result)
  // })
    
//  db.collection('users').updateOne( {_id: new ObjectID("6156818c48f274658792e992")},{$inc:{age:10}}).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })
 
//  db.collection('tasks').updateMany({completed:true},{$set:{completed:false}}).then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })

//     db.collection('users').deleteOne({_id:ObjectID("6156818c48f274658792e992")}).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//       console.log(error)
//     })
// }) 

db.collection('users').deleteMany({name:'Girja'}).then((result)=>{
   console.log(result)
}).catch((error)=>{
  console.log(error)
})

})
 //about global ids of mongodb

// generate ides using node js ->there is much more information than just
//series of character --> 12 byte id in which first 4 byte is timestamp 5 byte is random value and 3 byte counter 
 // getTimestamp() -- return the generation date of object id


//  id is stored in the binary format id.id will give us the id which is stored in the binary format
// console.log(id.id)
//console.log(id.id.length)

//read operation using ids or any other field.. or multiple documents to a specific subsets
// find or findone -->two methods

//update operations we have updateOne and updateMany


// delete operations deleteMany and deleteOne

