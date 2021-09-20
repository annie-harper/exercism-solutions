//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//input string
//export string
export const toRna = (str = "") => {
  
  const pairs = {
    "A": "U",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  return str.split('').map( dna => pairs[dna]).join('');

};
