export const isArmstrongNumber = (num) => {
  let arr = Array.from(String(num), Number);
  let total = 0;
  let mapped_array = arr.map(n => Math.pow(n ,arr.length));

  
  function sum(){
    total += mapped_array.reduce(function(a, b){
      return a + b;
    }, 0);
    return total
  }

 return (sum(mapped_array) === num) ? true : false
};
