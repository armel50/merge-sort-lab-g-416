
const findMinAndRemoveSorted = (array) =>{
 
let  min = array[0]
 let index = 0
  for(let i = 1; i< array.length; i++){
    if(array[i] < min){
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return min
}

const merge = (first, second) => {
  let result = []
  if(first.length > 0 && second.length > 0){
     if(first[0] < second[0]){
       const min =  findMinAndRemoveSorted(first)
      result.push(min)
    }else{
      const min = findMinAndRemoveSorted(second)
      result.push(min)
    }
    merge(first,second)
  }else if (first.length === 0){
    result = result.concat(second)
      return result 

  }else if (second.length === 0){
    result = result.concat(first)
      return result 

  }
   
  
  
}