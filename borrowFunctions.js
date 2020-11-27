class Vegetables {
    veggies() {
        return "Choose Veggies"
    }
}
class Meat {
    meat() {
        return "Choose Meat"
    }
}


class Sauces{
  choosingSauces(){
    return "Choose Sauces"
    }
}

function combineClasses(dest,...src){
  for (let _dest of src) {
        for (var key of Object.getOwnPropertyNames(_dest.prototype)) {
            dest.prototype[key] = _dest.prototype[key]
        }
    }
}

class Burger{
}

//adding a new class
class Cheese{
  addingCheese(){
    return "Add Cheese"
  }
}

combineClasses(Burger,Vegetables,Meat,Sauces,Cheese)
