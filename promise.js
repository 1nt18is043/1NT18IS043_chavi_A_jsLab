const msg="hello"
let message=new Promise(function(resolve,react){
  if (msg=="hello"){
    resolve('Success')
  }
  else{
    react('Failure')
  }
})
console.log(message)
message.then((op)=>{
  console.log(op+" then is executed")
})
message.catch((op2)=>{
  console.log(op2+ " catch is excecuted")
})