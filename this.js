function func1(name){
  this.name = name;
}
func1.prototype = {
  talk: function(){
    console.log ("Welcome " + this.name);
  }
}
var obj1 = new func1("Bran")
function display(){
  var obj2 = new func1("Jon");
  obj2.talk() // works
  obj1.talk() // doesn't work
}
display()
