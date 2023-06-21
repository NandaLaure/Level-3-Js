//Write a program that prints a multiplication table upto 12
//Write a multiplication table that prints all prime numbers that exist between 0 - 1000
//3)Sum of numbers using a for-loop, while loop and a do-while loop
const numbers = [1, 3, 5, 7, 9]
//a)Using a for-loop
function addition(){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[1]
    }
    console.log('The sum is', sum);
}
addition()

//b)Using a while loop
function addition2(){
    let i = 0
    let sum2 = 0
    while (i < numbers.length){
        sum2 += numbers[1]
        i++
    }
    console.log('The sum is', sum2);
}
addition2()

//c)Using a do-while loop
function addition3(){
    let i = 0
    let sum3 = 0
    do{
        sum3 += numbers[1]
        i++
    }
    while( i < numbers.length)
    console.log('The sum is', sum3);
}
addition3()

//4)Write a function that concatenates two list
function concatenate(){
    let list1 = [1,2,3,4,5,6]
    let list2 = [7,8,9,10,11,12]
    let list3 = [].concat(list1,list2)
    console.log('The Concatenated list is', list3);
}
concatenate()

//5)Write a function that takes a number and returns a list of digits
function splitNum(){
    let numbers = 12345
    let stringNum = numbers.toString()
    let splitString = stringNum.split('')
    let splitNum = splitString.map(Number)
    console.log('List of digits includes', splitNum);
}
splitNum()

//6)Write a function that returns a sum of numbers 
function sumOfNum(num){
    let stringNum = num.toString()
    let newString = stringNum.split('')
    let splitNum = newString.map(Number)
    let sum = 0
    splitNum.map( x => sum += x)
    console.log(sum);
}
sumOfNum(123456)