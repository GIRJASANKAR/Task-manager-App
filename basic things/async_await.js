
//two parts to using async/await in code 
// the async keyword

// An async function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.
//    const hello =async ()=>{
//        return "hello World!"
//   }
// Ah. Invoking the function now returns a promise. This is one of the traits of async functions — their return values are guaranteed to be converted to promises.

// hello().then((value)=>{
//     console.log(value)
// })


const add=(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(a<0 || b<0){
        return reject('Numbers must be non-negative')
      }
      resolve(a+b)

    },2000)
  })
}



const doWork=async ()=>{
   const sum =await add(30,50)
   console.log(sum)
   const sum2=await add(sum,20)
   console.log(sum2)
   const sum3=await add(sum2,100)
   console.log(sum3)
   return sum3
}


doWork().then((data)=>{
  console.log('ye h data',data)
}).catch((e)=>{
  console.log(e,' ye raha error!')
})