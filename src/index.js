
exports.min = function min (array = 0) {

    if((array.length === 0) || (array ===  0)){
        return 0
    } 
    let min = array[0]
    
    array.forEach(element => {
        if (min > element) {
            min = element
        }
        
    })
  return min;
}

exports.max = function max (array = 0) {
    if((array.length === 0) || (array ===  0)){
        return 0
    } 
    let max = array[0]
    
    array.forEach(element => {
        if (max < element) {
            max = element
            
        }
        
    })
  return max;
}

exports.avg = function avg (array = 0) {
    if((array.length === 0) || (array ===  0)){
        return 0
    } 
    let sum = 0;    
    let res;
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    res = sum / array.length  
  return res;
}
