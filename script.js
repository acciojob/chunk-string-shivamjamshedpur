function stringChop(str, size) {
  // your code her
  if (!str || str.length === 0) {
    return [];
  }
  
  const chunks = [];
  
  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
