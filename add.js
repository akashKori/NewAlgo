function Shape(name){
   this.name = name
   this.f1 = function(){
      console.log('implementation is not there')
   }
   this.f2= function(){
     console.log('shape f2')
   }

}

function Rectangle(width,name){
  // Shape.call(this,name)
  this.width = width
  this.f2 = function() {
    console.log('reactangle method')
  }
}

let rec = new Rectangle(4,'reactangle')

rec.f1()
rec.f2()
