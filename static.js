class  Counter{
  constructor() {
      static count = 0

      static increment(){
         this.count++
      }

      static getCount() {
        console.log(this.count);
      }
  }
}

Counter.increment()
Counter.increment()
Counter.getCount()
