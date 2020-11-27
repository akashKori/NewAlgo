function Node(data){
  this.data= data
  this.left=null
  this.right = null
}

function BST() {
  this.root = null
}

BST.prototype.insert = function(data){
  let node = new Node(data)
  if(this.root === null) {
     this.root = node
     return
  } else {
     let currentNode = this.root
     while (currentNode) {
         if(data<currentNode.data) {
           if(currentNode.left === null) {
             currentNode.left = node
             return
           }
           currentNode = currentNode.left
         } else if(data> currentNode.data) {
           if(currentNode.right === null) {
             currentNode.right = node
             return
           }
           currentNode = currentNode.right
         } else {
           console.error("duplicates not allowed");
         }
     }
  }
}

BST.prototype.search = function(data){
   if(this.root === null) {
     console.log('BST is empty')
     return
   } else if(data === null || data === undefined) {
    console.log('data is not provided')
    return
   }
   else {
     let currentNode = this.root
     while (currentNode) {
        if(currentNode.data === data) {
          return true
        } else if(data< currentNode.data) {
           currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
     }
   }
   return false
}


let myBst = new BST()
myBst.insert(40)
myBst.insert(50)
myBst.insert(20)
myBst.insert(10)
myBst.insert(15)
myBst.insert(55)
myBst.insert(60)
// console.log(myBst.search(112))

BST.prototype.preOrder = function(){
   let crNode = this.root
   if(crNode === null) {
      console.log('tree is empty');
   }
   preOrderImp(crNode)
}

function preOrderImp(crNode){
   if(crNode !==null) {
     console.log('preOrder', crNode.data)
     if(crNode.left) {
       preOrderImp(crNode.left)
     }
     if(crNode.right){
       preOrderImp(crNode.right)
     }
     return
   }
   return
}

myBst.preOrder()


BST.prototype.inOrder = function(){
  let currentNode = this.root
  if(currentNode === null) {
    console.log('tree is empty')
  }
  inOrderImp(currentNode)
}

function inOrderImp(currentNode){
    if(currentNode.left) {
      inOrderImp(currentNode.left)
    }
    console.log('inOrder',currentNode.data)
    if(currentNode.right){
      inOrderImp(currentNode.right)
    }
    return
}

myBst.inOrder()

BST.prototype.postOrder = function(){
  if(this.root === null) {
     console.log('tree empty');
  }
  postOrderImp(this.root)
}
function postOrderImp(currentNode){
  if(currentNode.left){
    postOrderImp(currentNode.left)
  }
  if(currentNode.right){
    postOrderImp(currentNode.right)
  }
  console.log(currentNode.data)
  return
}

myBst.postOrder()
