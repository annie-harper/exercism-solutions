let proteins = {
  "AUG": "Methionine",
  "UUU": "Phenylalanine",
  "UUC": "Phenylalanine",
  "UUA": "Leucine",
  "UUG": "Leucine",
  "UCU": "Serine",
  "UCC": "Serine",
  "UCA": "Serine",
  "UCG": "Serine",
  "UAU": "Tyrosine",
  "UAC": "Tyrosine",
  "UGU": "Cysteine",
  "UGC": "Cysteine",
  "UGG": "Tryptophan",
  "UAA": "STOP",
  "UAG": "STOP",
  "UGA": "STOP"
}

export const translate = (str = "") => {

  let result = [];
  let proteinArray = [];

  str.slice(0, 3);

  for (let i = 0; i < str.length; i += 3) {
    proteinArray.push(str.substring(i, i + 3));
  }

  for (let i = 0; i < proteinArray.length; i++) {
    if (proteins[proteinArray[i]] == "STOP") {
      break;
    } else if (proteinArray[i] in proteins) {
      result.push(proteins[proteinArray[i]]);
    } else{
      throw new Error('Invalid codon');
    }
  } 
  return result;
}
