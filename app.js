
let arrOfArrs = [];
let arrOfThree = [];


let randomGrab = function(){
  var randomGrab  = Math.floor(Math.random() * 100);
  return randomGrab ;
};

var ContentsOfInnerArray = function(a, b, c){
  let containerOfArrs = [];
  containerOfArrs[0] = a;
  containerOfArrs[1] = b;
  containerOfArrs[2] = c;
  arrOfArrs.push(containerOfArrs);
};

for (var i = 0; i < 10; i++){
  new ContentsOfInnerArray(randomGrab(),randomGrab(),randomGrab());
}

console.log(arrOfArrs);

for (var i = 0; i < arrOfArrs.length; i ++){
  for (var j = 0; j < arrOfArrs[i].length; j++){
    console.log(arrOfArrs[i][j]);
  }
}








// short hand version for making a deep copy...
// var obj = [1,2,3];
// var newObj = [...obj];
// console.log(newObj, 'newObj');





// let valueWatcher = function(){
//   let b = 0;
//   for (var a = 0; a < 15; a++){
//     console.log(a);
//   }
//   if (a - b === 1){
//     b++;
//     console.log(b,'b');
//   }
// };
// valueWatcher();




// //source array
// let originalArr = ['whatever1','whatever2','whatever3','whatever4','whatever5','whatever6', 'whatever7', 'whatever8', 'whatever9' ];
// let randosGrabbed = [];

// let GoingToBeSplicedArr = originalArr.map(ele => ele);


// var randoGrabber = function(){

//   GoingToBeSplicedArr = originalArr.map(ele => ele);

//   let singleGrab = GoingToBeSplicedArr[Math.floor(Math.random() * GoingToBeSplicedArr.length)];
//   randosGrabbed.push(singleGrab);

//   let singleGrabIndexVal = GoingToBeSplicedArr.indexOf(singleGrab);
//   GoingToBeSplicedArr.splice(singleGrabIndexVal, 1);
// };