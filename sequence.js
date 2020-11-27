function Person(name, age){
  this.name= name
  this.age = age
}

Person.prototype.getName = function () {
  console.log(this.name)
}

let p1 = new Person('akash', 33)
p1.getName()
// p1.getAge()
Person.prototype.getAge = function() {
 console.log(this.age)
}

let p2 = new Person('rajesh',32)
p2.getAge()
