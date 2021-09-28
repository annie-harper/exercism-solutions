/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime){
  if(remainingTime == 0){
    return 'Lasagna is done.'
  }else if(remainingTime >= 0){
    return 'Not done, please wait.'
  }else{
    return 'You forgot to set the timer.'
  }
}

export function preparationTime(layers, timePerLayer = 2){
  return layers.length * timePerLayer;
}

export function quantities(layers){
  
  let sauce_quantity = 0;
  let noodle_quantity = 0;
  
  for (let i = 0; i < layers.length; i++) {
    if(layers[i] == "sauce"){
      sauce_quantity += .2;
    }else if(layers[i] == "noodles"){
      noodle_quantity += 50;
    }
  }
  return {
    noodles: noodle_quantity,
    sauce: sauce_quantity
  }
}

export function addSecretIngredient(friendsList, myList){
  let last_item = friendsList[friendsList.length - 1];
  myList.push(last_item);
    console.log(myList);
}

export function scaleRecipe(recipe, portions){
  let factor = portions / 2;
  let new_recipe = {};
  for(let ingredient in recipe){
    new_recipe[ingredient] = recipe[ingredient] * factor;
  }
  return new_recipe;
}