const os=require('os')

//info about current user
const user=os.userInfo()
console.log(user)

// method retuns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)


const currentOS={
  name:os.type(),
  release:os.release(),
  totalMemory:os.totalmem(),
  freeMemory:os.freemem()
}

console.log(currentOS)