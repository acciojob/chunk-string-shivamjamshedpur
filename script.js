function stringChop(str, size) {
 // Check if the input string is null or empty
  if (!str || str.length === 0) {
    return [];
  }
  
  // Initialize an array to store the chunks
  const chunks = [];
  
  // Iterate through the string and slice it into chunks of the specified length
  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));
  }
  
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
