function firstNonRepeatedChar(str) {
 const frequencyMap = {};
let minKey=null;
    for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
    
    let minValue=Infinity;
    for(let key in frequencyMap){
           console.log(key)
           if(frequencyMap[key]<minValue){
               minValue = frequencyMap[key];
               minKey=key;
           }
    }
    
    if(minValue==1){
          console.log(minKey)
    }
    else{
          console.log("null")
    }
    
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
