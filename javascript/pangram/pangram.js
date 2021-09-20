//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const isPangram = (phrase) => {
  const array = phrase.toLowerCase().split('').filter(letter => letter != false && isNaN(letter));
  const unique = array.filter((letter, index, array) => array.indexOf(letter) === index);
  return unique.length >= 26 ? true : false;
};
