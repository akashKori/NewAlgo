function Node(data) {
   this.data = data
   this.next = null
}

function LinkedList(){
  this.head = null
  this.length = 0
}

LinkedList.prototype.push= function(data){
    let newNode = new Node(data)
    let currentNode = this.head
    if(currentNode === null) {
       this.head = newNode
       this.length++
    } else {
      while (currentNode.next) {
         currentNode = currentNode.next
         this.length++
      }
      currentNode.next = newNode
    }
}

LinkedList.prototype.traverse = function() {
  let currentNode = this.head
  if(currentNode === null) {
    console.log('linked list is empty');
  } else {
    while (currentNode.next) {
       currentNode = currentNode.next
    }
  }
}

let ll = new LinkedList()
let arr = [11,22,33]
arr.map(l=>ll.push(l))
ll.traverse()
