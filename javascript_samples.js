/**
 * console.log("----------------- Working with JS Class & Function -------------------------");

function myFunction(){
  let self:any = <any>this;
  self.a = "Some value of a";
  self.b = "Value of b";
}

myFunction.prototype.a = "New value of a";
myFunction.prototype.c = "Adding a new variable c"; 

var myFunc = new myFunction();

console.log(myFunc.a);
console.log(myFunc.b);
console.log(myFunc.c);

myFunc.a = "Check the value of a now";

console.log("############################################################################");
console.log(myFunc.a);
**/

console.log("------------------- Count Occurrence of element ---------------------------");
function countColor(){
  const colours:string[] = ["red", "blue", "yellow", "red", "blue", "yellow", "red", "blue","orange","green"];
  console.log("Input array ",colours);
  let colourCount:any = [];
  colours.every((clr) =>{
    const foundClr = colourCount.find((item:any) => {
      if(item.name === clr)
      return item;
    })
    
    if(foundClr){
      colourCount.map((clrItem:any) => {
        let newObj = null;
        if(clrItem.name === foundClr.name){
          newObj = Object.assign({},clrItem);
          newObj.count = clrItem.count++;
        }
        return newObj;
      })
    } else {
      colourCount.push({
        name: clr,
        count: 1
      })
    }
    
    return colourCount;
  })
  
  console.log("Result   ",colourCount);
}
countColor();


console.log("-------------------------- Currying  ----------------------------");
function say(a:any){
  return function(b:any){
    return function(c:any){
      return function(d:any){
        return a+b+c+d;
      }
    }
  }
}
console.log(say('My')(' name')(' is')(' Abhishek'))

const sayNew = (a:any) => {
  return (b:any) => {
    return (c:any) => {
      return (d:any) => {
        return a+b+c+d;
      }
    } 
  }
}
console.log(sayNew(1)(2)(3)(4))
console.log(sayNew('A')('b')('h')('i'))

const sayAgain:any = (a:any) => (b:any) => (c:any) =>  (d:any) =>  a+b+c+d;
console.log(sayAgain('A')('b')('h')('i'))

const sayAgainNew = function sayAgain(a:any){
    return function(b:any){
        if(b) return sayAgain(a+b);
        else return a;
    }
}
console.log(sayAgainNew('I ')('am ')('Abhishek ')('Shetty')())

const sayAgainArrowFunc = (a:any) => (b:any) =>  b ? sayAgain(a+b) : a;
console.log(sayAgainArrowFunc('I ')('am ')('Abhishek ')('Shetty')())

console.log("-------------------------- Call stack execution  ----------------------------");
console.log('A');

setTimeout(() => {
  console.log('B'); 
}, 0);

Promise.resolve().then(() => {
  console.log('C'); 
});

console.log('D');

console.log("-------------------------- Closure ----------------------------");
function createCounter() {
  var count = 0;
  function counter() {
    count++;
    console.log(count);
  }
  return counter;
}
var increment = createCounter();
increment(); 
increment(); 
increment();


console.log("-------------------------- Highest element in an array ----------------------------");
let a=[5,6,1,4,9,0,3,6,7,8]
let foundElement:any = []
function fndGreatestElement(){
  a.every((item) => {
    if(foundElement.length === 0)
		
      foundElement.push(item);
    else {
      if(item > foundElement[0]){
        foundElement.pop();
        foundElement.push(item);
      }
    }
    return foundElement;
  })
}
fndGreatestElement();
console.log("Greatest element",foundElement[0])

console.log("-------------------------- Shuffle element in an array ----------------------------");
let names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
let currentIndex:number = names.length;
while(currentIndex != 0){
   let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [
		names[currentIndex], names[randomIndex]
	] =
	[
		names[randomIndex], names[currentIndex]
	];
}
console.log(names)

console.log("-------------------------- destructuring  ----------------------------");
const { carType, model, registration: {city} } = 
    {   
        carType: 'test' , 
        model : 'Honda'  ,  
		registration : {
			city: 'Bangalore'
		}  
	}
	console.log(model,city )


console.log("-------------------------- Working with Promise ----------------------------");
const prm = new Promise((resolve,reject) => {
  return resolve('Checking this Promise Sucess');
})

prm.then(function(res){
  console.log(res)
});

console.log("-------------------------- Promises can be passed through series of then callbacks ----------------------------");
const dt = Promise.resolve(23).then((result)=> result+1).then((result)=> result+100)
dt.then(latest => console.log(latest))


console.log("-------------------------------- Promise and set time out ------------------------------------------------------");
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve()
    .then(() => console.log('Nested Promise 1'))
    .then(() => console.log('Nested Promise 2'));
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
    setTimeout(() => {
      console.log('Timeout 2');
      Promise.resolve().then(() => console.log('Deep Nested Promise'));
    }, 0);
    return 'Value';
  })
  .then((val) => {
    console.log('Promise 2');
    setTimeout(() => console.log('Timeout 3'), 0);
  });
  
console.log('Middle');

setTimeout(() => console.log('Timeout 4'), 0);
console.log('End');

