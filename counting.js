let names = ['alice', 'bob','tiff', 'alice']

let countName = names.reduce((acc,name)=>{
if(acc[name] >=0){
acc[name]++
} else {
acc[name]=1
}
return acc
}, {})

console.log(countName)
