function add(){
  return this.a+ this.b
}

let o = {a: 10, b:20}

let makeAdder = add.bind(o)

console.log(makeAdder());
