function firstNonRepeatedChar(string) {
  for (let i = 0; i < string.length; i++) {
    let result = string.charAt(i);
    if (string.indexOf(result) == i && string.indexOf(result, i + 1) == -1) {
      return result;
    }
	  
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
