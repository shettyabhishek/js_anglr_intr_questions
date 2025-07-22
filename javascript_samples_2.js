//Math's max & function to get the largest & smallest element in array
const ar = [99, 5, 3, 100, 1]
console.log(Math.max(...ar))
console.log(Math.min(...ar))

//playing with objects 
let obj = {a: "v"}
let asnObj = Object.assign(obj,{'propOne': "property-one"})
let newObj = Object.create(obj)
console.log(newObj)
console.log(asnObj)
console.log(obj)
let nObj = {...obj,myProp: '2',mProp: 'something'}
console.log(nObj)
interface Person {
    isHuman: boolean,
    name?:string,
    printIntroduction: Function
}
let person:Person = {
  isHuman: true,
  name: 'Old test',
  printIntroduction(){
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
delete person["name"]
person.printIntroduction()


//Repeat function of javascript
console.log('gfg'.repeat(3))

//Sum of array elements using reduce function
let newRes = ar.reduce((res,item)=>{
    return res+item
})
console.log(newRes)

//Fibonacci series 
function fibFunc(n:number):number[]{
    let fibArray:number[] = [];
    if(n<1) return [];    
    else {
        for(let i=1;i<=n;i++){
            if(i == 1){
                fibArray.push(0);
                fibArray.push(1);   
            } else {
                let x = fibArray[i-1];
                let y = fibArray[i-2];
                fibArray.push(x+y)
            }
        }
         
    }
    return fibArray;
}
console.log(fibFunc(8))

//Factorial of a number 
function factNum(n: number):number{
    let numArray = []
    if(n <= 1) return 1;
    else {
        for(let x=2;x<=n;x++){
            numArray.push(x);
        }
    }
    console.log(numArray)
    return numArray.reduce((result,item) => {
        return result*item
    })
}
console.log(factNum(8))

//Frequency of occurrence
const nArray = [1, 1, 2, 3, 3, 4]
function frequency(nArray: number[]){
    let ocrnc:any[] = [];
    nArray.forEach((item:number)=>{
        let foundItem;
        if(ocrnc){
            foundItem = ocrnc.find((i)=>{
                return i['num'] === item
            })            
        }         
        if(!foundItem){
            ocrnc.push({
                num: item,
                count: 1 
            })
        } else {
            foundItem.count = foundItem.count+1
            ocrnc.map(allElem => {
                if(allElem.num === foundItem.num)
                    return foundItem;
                else 
                    return allElem
            })
         }
    })
    return ocrnc
}
console.log(frequency(nArray))

//merging 2 arrays 
console.log(nArray.concat(ar))
const newAr = [...nArray,...ar]
console.log(newAr)
console.log([...newAr,1,3,4,5,6])

//Set gets a list of all unique elements
const ar = [1, 1, 2, 3, 3, 4, 99, 5, 3, 100, 1, 1, 3, 4, 5, 6] 
console.log(new Set(ar))
const arObj = [{name: 'name1',type:'cars'},{name: 'name2',type:'trucks'},{name: 'name1',type:'bikes'}]
console.log(new Set(arObj))
const arStr = ["cars","bikes","trucks","red","cars","yellow","blue","red"];
console.log(new Set(arStr));
//console.log(ar.reverse())
const st = new Set(ar)
console.log(Array.from(st))


// Find the First Non-Repeated Character in a String in JavaScript
function checkOccrnc(str: string):string{
  str = str.toLowerCase();
  const strLen = str.length;
  let foundChar = "";
  for(let i=0;i<strLen;i++){
    if(foundChar === ""){
        const getChar = str.toLowerCase().charAt(i);
        if(str.split(getChar).length == 2)
            foundChar = getChar;   
    } 
  }
  return foundChar
}
console.log(checkOccrnc("ZAmazingmi"))

//For loop ES6 for information
/** 
 for(let [index,value] of ar.entries()){
    console.log(index,value)
}
**/

//Check if Two Strings are Anagrams
function checkAnagrams(inpOne:string,inpTwo:string): boolean{
   if(inpOne.length != inpTwo.length) return false ;
   else {
    const strOneSet = [...inpOne].sort().join()
    const strTwoSet = [...inpTwo].sort().join()
    return strOneSet === strTwoSet ? true : false
   }
}
console.log(checkAnagrams("knight","nighty"))

//check vowels in a string 
function getVowels(st:string){
    let vowelsCounter:any= {}
    const validVowels = ['a','e','i','o','u'];
    const getStrChars = [...st];
    getStrChars.forEach((chr:any)=>{
        if(validVowels.indexOf(chr) > -1){
            vowelsCounter[chr] = (vowelsCounter[chr] || 0) + 1;
        }
    })
    console.log(vowelsCounter)
    return vowelsCounter;
}
getVowels("immediately");

//Move All Zeroes to End
function moveZerosToEnd(numArray: number[]){
    let zeroCounter: number = 0;
    let resArray: number[] = [];
    numArray.forEach((elem) => {
        if(elem === 0){
            zeroCounter++;
        } else resArray.push(elem);  
    })        
    if(zeroCounter > 0)
        for(let i=0;i<zeroCounter;i++){
            resArray.push(0)
        }
    return resArray
}
console.log(moveZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(moveZerosToEnd([10, 12, 1, 4, 3, 50, 75, 90]));

//Pascal's triangle is a triangular array of the binomial 
//coefficients formed by summing up the elements of previous row.
function pascalTriangle(n: number):number[][]{
    let psclTrnglArray: number[][] = []
    if(n<=0) return []
    else {
        if(n == 1) return [[1]];
        else if(n==2){
            return [[1],[1,1]]
        } else if (n > 2){
            psclTrnglArray.push([1]);
            psclTrnglArray.push([1,1]);
            for(let i=3;i<=n;i++){
                let resArray = new Array(i).fill(0);
                resArray[0] = 1;
                resArray[resArray.length-1] = 1;
                for(let j=1;j<resArray.length-1;j++){
                    let previousRow = psclTrnglArray[i-2]                    
                    resArray[j] = previousRow[j-1]+previousRow[j];
                }
                psclTrnglArray.push(resArray)
            }
        }
    }
    return psclTrnglArray;
}
console.log(pascalTriangle(5))