let names = ['a','b','a','b','c','e','e','e','c','d','d','d','d']

let remove = names.reduce((acc, cr)=> {
  if(acc.indexOf(cr)=== -1){
    acc.push(cr)
  } return acc
}, [])

console.log(remove);
