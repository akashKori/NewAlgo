function findMagicNumber(arr) {
   let start = 0, end = arr.length
   return search(arr, start,end)
}
function search(arr,start,end){
  while (start<=end) {
     let mid = Number.parseInt((start+end )/2)
     if(arr[mid] === mid) {
       return mid
     } else if(mid>arr[mid]) {
        return search(arr,mid+1,end)
     } else {
        return search(arr,start,mid-1)
     }
  }
  return -1
}
const ar = [-1, 4, 4, 2, 4, 10 ]
console.log(findMagicNumber(ar))
