//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//find square root without using built in javascript functions
//
export const squareRoot = (num) => {
  for(let i = 1; i <= num; i++){
    if (i * i == num){
      return i;
    }
  }
};


