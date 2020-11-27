class Vehicle {
    constructor(fuel){
      this.fuel= fuel
    }
    turnOn() {
      //write-code-here
      console.log("Turned on")
    }
    turnOff(){
     console.log("Turned off")
        //write-code-here
    }
}

class Car extends Vehicle{
    constructor(fuel,isparked){
        super(fuel)
        this.isparked = isparked
    }
    turnOn(){
        if(this.fuel>=500){
           super.turnOn()
        } else {
          console.log("Refill Fuel")
        }
    }

    turnOff(){
        if(this.isparked){
          super.turnOff()
        } else {
          console.log("Car not parked")
        }
    }
  }
  let nano = new Car(500, true)
  nano.turnOn()
  nano.turnOff()
