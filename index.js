function find(arr1, arr2) {
  var temp = []
  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++){
      if(arr1[i] == arr2[j]){
        temp.push(arr1[i])
      }
    }
  }

  return temp
}

