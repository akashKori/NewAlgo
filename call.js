function add(c,d) {
  return this.a+ this.b+ c+ d// DEBUG:
}

let o = {a:10,b:20}

console.log(add.call(o,10,20));
