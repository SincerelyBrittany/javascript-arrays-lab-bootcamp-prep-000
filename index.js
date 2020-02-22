/ PART TWO

var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

 // 1) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
 
  function destructivelyAppendKitten(name){
      var appendKitten = kittens.push(name);
      return appendKitten;
 }



  // 2) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginningof the kittens array:
  
 function destructivelyPrependKitten(name){
      var appendKitten = kittens.unshift(name)
      return appendKitten;
 }

  // 3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
  function destructivelyRemoveLastKitten(name){
      var appendKitten = kittens.pop(name)
      return appendKitten;
 }


  // 4) Arrays destructivelyRemoveFirstKitten() removes the First kitten from the kittens array:
  
    function destructivelyRemoveFirstKitten(name){
      var appendKitten = kittens.shift(name)
      return appendKitten;
 }
  

  // 5) Arrays appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
  
    function appendKitten(name) {
      var appendKitten = [...kittens,name];
      return appendKitten;
 }
  
    
  // 6) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
 
     function prependKitten(name) {
      var appendKitten = [name,...kittens];
      return appendKitten;
 }
  
  
  // 7) Arrays removeLastKitten() removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
 
     function removeLastKitten(name) {
      var removeKitten = kittens.slice(0, kittens.length - 1);
      return removeKitten;
 }
  
 

  // 8) Arrays removeFirstKitten() removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:
  
     function removeFirstKitten(name) {
      var removeKitten = kittens.slice(1);
      return removeKitten;
     }