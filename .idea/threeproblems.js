/**
 * Created by sora1234 on 9/22/2015.
 */

// Problem 1
// Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.

function sumFor(list){
  var i = 0;
  var sum = 0;
  for(; i < list.length ; i++){
    sum += list[i];
  }
  return sum;
}
console.log(sumFor([1,2,3,4,5]));
function sumWhile(list){
  var i = list.length;
  var j = 0;
  var sum = 0;
  while(j < i){
    sum += list[j];
    j++
  }
  return sum;
}
console.log(sumWhile([1,2,3,4,5]));

function sumRecursion(list){
  var sum = 0;
  if(list.length-1 === 0 ){
      return list[list.length-1];
  }
  else {
    sum += list[list.length-1];
    sum += sumRecursion(list.splice(0, list.length - 1));
  }

  return sum ;
}
console.log(sumRecursion([1,2,3,4,5]));

function sumTheSimpleWay(list){

  return _.reduce(list,function(memo,num){
    return memo + num;
  },0)
}

console.log(sumTheSimpleWay([1,2,3,4,5]));
// Problem 2
function zipList(list1,list2){
  var i = 0;
  var j = 0;
  var listr = [];
  for(; i < list1.length; i++){
    listr[listr.length] = list1[i];
    listr[listr.length] = list2[j];
    j++;
  }

  return listr
}
console.log(zipList([1,2,3,4],['a','b','c','d']));

function zipListTheSimpleWay(list1, list2){
  var x = _.zip(list1,list2);
  return _.flatten(x);
}
console.log(zipListTheSimpleWay([1,2,3,4],['a','b','c','d'
]));

// Problem 3
function fib(max){
  var i = 2;
  list = [0,1];
  for(;i < max; i++){
    list[list.length] = list[list.length-1] + list[list.length - 2];
  }
  return list;
}

console.log(fib(10));