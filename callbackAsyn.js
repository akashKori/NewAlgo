const url = 'https://jsonplaceholder.typicode.com/todos/1'
function getAPIRequest(_callbackOnSuccess_, _callbackOnError_){

  var getReq = new XMLHttpRequest();
  getReq.open("GET", url)
  getReq.send();
  getReq.onload = () => {
    if(getReq.status == 200){
      callbackOnSuccess(getReq);
    }else if(getReq.status == 400){
      callbackOnError();
    }
  }
}


const _callbackOnSuccess_ = function(){
  log('success')
}

getAPIRequest()
