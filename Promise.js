function success(value){
  console.log('resolved ', value)
}

function error(){
  console.log('rejected')
}

const loopPromise = new Promise((success,error)=>{
  success()
})
loopPromise
.then(e=> console.log(e))
.catch(m=>console.log(m))
