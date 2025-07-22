console.log("----------------------------------------------  Given a string, reverse each word in the sentence  ----------------------------------------------")
var str = "Welcome to this Javascript Guide!";
var allElements = str.split(" ");
var newArr:any[] = []
allElements.forEach((item)=>{
    var newItem = [...item].reverse().join('');
    newArr.push(newItem);
})
console.log(newArr.join(" "))

var newStrArr:any[] = [...str].reverse()
console.log(newStrArr.join("").split(" ").reverse().join(" "))

console.log("-------------------------------------------------  Implementing a sample for memoization   ----------------------------------------------------")
function findVal(){
  let _myCache = []
  return function myCachedData(param){
    console.log("########################################################")
    if(!_myCache[param])
      _myCache[param] = param * param;
    else console.log('getting from cache');
    return _myCache[param]
  } 
}

myResult = findVal();
console.log(myResult(5))
console.log(myResult(5))
console.log(myResult(25))
console.log(myResult(52))
console.log(myResult(88))
console.log(myResult(25))

console.log("-------------------------------------------------  Difference in behavior of  this   ----------------------------------------------------")
let a = {
  name: 'Test',
  method: function(){
    console.log(this,this.name)
  }
}
a.method();

let b = {
  name: 'Test',
  method: () => {
    console.log(this,this.name)
  }
}
b.method();
console.log("-------------------------------------------------  Unique behavior of the fill function   ----------------------------------------------------")
let arr = new Array(3).fill([]);
arr[0].push(10);
console.log(arr); // ???


console.log("-------------------------------------------------  Array functions   ----------------------------------------------------")
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

let myObj = {}
users.forEach(function(item){
  const newObj = {};
  newObj[item.id] = item.name
  myObj = Object.assign(myObj,newObj)
})
console.log(myObj);

let res = users.map(function(item) {
  return "ID: "+item.id+" ,Name:" +item.name
})
console.log(res)

const sentence = "hello world from javascript";
let myWordArray = sentence.split(" ");
let newArray = [];
myWordArray.forEach(function(item){
  const str = item.charAt(0).toUpperCase() + item.slice(1)
  newArray.push(str)
});
console.log(newArray.join(" "))


var arr = [{x:1},{x:2},{x:4}];
let result = arr.reduce(function (a, b) {
  return {x: a.x + b.x}; // returns object with property x
})
console.log(result)


console.log("-------------------------------------------- Reversing the entire string keeping the special chars at its place --------------------------------")
const str = "howare#youlets*&CHECK@&iF___this#is#working";
const reverseStr = function(st: string):string{
    console.log("String length ",str.length)
    const strArray = [...st];
    const chrArr:string[] = [];
    const splChrArr:[{"ind": string, "type": string}] | any = [];
    strArray.forEach((ch,i) => {
        if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
            chrArr.push(ch)
        } else {
            splChrArr.push({
                "ind": i,
                "type": ch
            })
        }
    })
    let newStr = chrArr.reverse().join("")
    //console.log(splChrArr)
    if(splChrArr)
        splChrArr.forEach((item:any,j: number) => {
            //console.log()
            const sub1 = newStr.substring(0,item['ind']);            
            const sub2 = newStr.slice(item['ind']);
            newStr = sub1+item['type']+sub2            
        })
    return newStr;
}
console.log(reverseStr(str));
console.log("-------------------------------------------- Reversing the string before every special chars --------------------------------")
const str = "howare#youlets*&CHECK@&iF___this#is#working";
//expected result - erawoh#steluoy*&KCEHC@&Fi___siht#si#gnikrow
const reverseStr = function(st: string):string{
    const strArray = [...st];
    const strElmsArr:string[] = [];
    let tempArray:string[] = [];
    strArray.forEach((cr) => {                 
        if((cr >= 'a' && cr <= 'z') || (cr >= 'A' && cr <= 'Z')){  
            //console.log(cr)          
            tempArray.push(cr)
        } else {
            //console.log(tempArray, cr)
            strElmsArr.push(tempArray.reverse().join(""))
            strElmsArr.push(cr);
            tempArray = []
        }
    })
    if(tempArray.length > 0){
        strElmsArr.push(tempArray.reverse().join(""))
    }
    return strElmsArr.join("");
}
console.log(reverseStr(str));