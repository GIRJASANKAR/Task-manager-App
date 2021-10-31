// before update and delete the document in mongodb we are going to learn promises in javascript
// now we are going to integrete promises in mongodb code...

//promises are an enhanesment of callbacks..
// first callback example then promise example...


//  const doWorkCallback=(callback)=>{
//      setTimeout(() => {
//         // callback('this is my error',undefined)
//         callback(undefined,{bkchodi:"mat kar"})
//      }, 3000);
     
//  }

//  doWorkCallback((error,result)=>{
//         if(error){
//          return console.log(error)
//         }
//         else{
//             console.log(result)
//         }
//  })


 // promises api-> to create a promise we use the new Promise() constructor
// as a developer we are going to create promise itself they will be created by the libraries with mongodb

 const doWorkPromise=new Promise((resolve,reject)=>{  // we have to pass a arrow function

    setTimeout(() => {
        //  resolve([7,4,1])  //in ressolve we send our data and in reject function we send error
        reject('cannot access')
    }, 2000);
 })    

 doWorkPromise.then((data)=>{
       console.log(data)
 }).catch((error)=>{
     console.log(error)
 })

 //a promise is nothing more than a object with a few methods