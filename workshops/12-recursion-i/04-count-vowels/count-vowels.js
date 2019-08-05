// YOUR CODE BELOW
const isVowel = (char) => {
  let vowels = "aeuioAEUIO";
  return vowels.indexOf(char) > -1 ? 1 : 0;
}

const countVowels = (str) => {
  let count = 0;
  
  if (!(str.length)) return 0;
  
  if (isVowel(str[0])) count += 1;
  return count +  countVowels(str.slice(1));
}
