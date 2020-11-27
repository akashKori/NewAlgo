const arr = [1,1,0,2,0,2,1,0]

function swap(a){
  let low = 0, high = arr.length-1, i=0
  while (i<=high) {
    if(a[i] ===0) {
      [a[i], a[low]] = [a[low], a[i]]
      i++
      low++
    } else if(a[i] === 1) {
      i++
    } else if(a[i] === 2){
      [a[i], a[high]] = [a[high], a[i]]
      high --
    }
  }
  return a
}

console.log(swap(arr))
