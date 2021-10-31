// const add=(a,b)=>{
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//          resolve(a+b)
//        },4000)
//    })
// }

// add(5,5).then((sum)=>{
//    console.log(" pahla the sum is ",sum)
//    return add(sum,25)
// }).then((sum)=>{
//     console.log(" doosra the sum is ",sum)
//     return add(sum,45)
// }).then((sum)=>{
//     console.log("  teesra the sum is ",sum)
//     return add(sum,150)
// }).then((sum)=>{
//     console.log(" final the sum is ",sum)
// }).catch((e)=>{
//     console.log(e)
// })




// require('./src/db/mongoose')
// const Users=require('./src/models/user')

// Users.findByIdAndUpdate('615809f07523fd6c57ab1580',{name:'Radhe shyam'}).then((data)=>{
//     console.log(data)
//     return Users.countDocuments({name:'Radhe shyam'})
// }).then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e)
// })


// const userupdateById=async (id)=>{
//   const update= await Users.findByIdAndUpdate(id,{name:'adult'})
//   console.log(update)
//   const totalcount=await Users.countDocuments({age:1})
//   return totalcount
// }

// userupdateById('61580aada50a6cce0bec9028').then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e)
// })













require('./src/db/mongoose')
 const Tasks=require('./src/models/task')

// Tasks.findByIdAndDelete('61584afea9820acadc29f2fb').then((data)=>{
//     console.log(data)
//     return Tasks.find({completed:false})
// }).then((data2)=>{
//     console.log(data2)
// }).catch((e)=>{
//     console.log('easme gaya h')
//     console.log(e)
// })

const taskDelete= async (id)=>{
   const deletetask= await Tasks.findByIdAndDelete(id)
   console.log(deletetask)
   const count= await Tasks.countDocuments({completed:false})
   return count


}

taskDelete('615d2e3f751dec7f4fe51bcc').then((data)=>{
   console.log(data)
}).catch((e)=>{
    console.log(e)
})