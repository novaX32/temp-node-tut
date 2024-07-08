const {readFile,writeFile}=require('fs')

console.log('starting')

readFile('./content/first.txt','utf-8',(err,result)=>{ //READ FIRST FILE STORE IT IN first VARIABLE
  if(err){                                             // err,result is callback functions which will run when 
    console.log(err)                                   // reading file id completed   
    return
  }
  const first=result;
  readFile('./content/second.txt','utf-8',(err,result)=>{   //READ SECOND FILE STORE IT IN second VARIABLE
    if(err){
      console.log(err)
      return
    }
    const second=result
    writeFile('./content/result-async.txt',`Here is the result: ${first},${second}`,(err,result)=>{ 
      if(err){                                                    //CREATE result-async AND WRITE THE DATA IN IT
        console.log(err)
        return
      }
      console.log('done with this task')
    })
  })
})
console.log('starting next task')