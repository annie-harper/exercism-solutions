//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (color) => {

  let answer = [];
  
  for(let i = 0; i < 2; i++){
    answer.push(COLORS.indexOf(color[i].toString().toLowerCase()));
  }
  return Number(answer.join(''));
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
