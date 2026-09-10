// let marks = [70, 80, 65, 90, 75];

// Calculate the average marks.
sum=0
let marks = [70,80,65,90,75];
for(i=0;i<=marks.length-1;i++){
     sum=marks[i]+sum
 }
avg=sum/marks.length
console.log(avg)

// 2. Count even numbers

// let numbers = [10, 15, 22, 31, 40, 55, 60];

// Count how many numbers are even.

// Expected:

// 4
count=0
let numbers= [10,15,22,31,40,55,60]
for(i=0;i<numbers.length;i++){
   if(i%2===0){
    count=count+1}
}
console.log(count)

// 3.⁠ ⁠Count odd numbers
// Using the same array, count how many numbers are odd.
// let numbers = [10, 15, 22, 31, 40, 55, 60];
count=0
for(i=0;i<numbers.length;i++){
    if(i%2!=0){
        count=count+1
    }
}
console.log(count)


// 4.⁠ ⁠Find the largest number

// let numbers = [25, 10, 45, 30, 60, 15];

// Find the largest number.
// Expected:

// 60
// method 1
let numbers = [25, 10, 45, 30, 60, 15];
let largest = Math.max(...numbers)
console.log(largest)

// method 2

let numbers = [25, 10, 45, 30, 60, 15];
let largest=numbers[0];
for(i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i]
    }
}
console.log(largest)

 
// 5.⁠ ⁠Find the smallest number

// let numbers = [25, 10, 45, 30, 60, 15];

// Find the smallest number.
// Expected:

// 10
// method-1
let numbers = [25, 10, 45, 30, 60, 15]
let smallest=Math.min(...numbers)
console.log(smallest)

// method-2
let numbers = [25, 10, 45, 30, 60, 15];
let smallest=numbers[0];
for(i=0;i=numbers.length;i++){
    if(numbers[i]<smallest){
       smallest=number[i]
   }
}
console.log(smallest)






// 6.⁠ ⁠Print numbers greater than 50

// let numbers = [25, 65, 40, 80, 55, 30, 90];

// Output:

// 65
// 80
// 55
// 90
let numbers = [25, 65, 40, 80, 55, 30, 90];
for(i=0;i<numbers.length;i++)
    if(numbers[i]>50){
       console.log(numbers[i])
    }


// 7.⁠ ⁠Find a particular element

// let numbers = [10, 20, 30, 40, 50];
// let target = 30;

// Check whether target exists in the array.
// Output:

// Found

let numbers = [10, 20, 30, 40, 50];
for(i=0;i<numbers.length;i++)
    {if(numbers[i]==30)
console.log("found")}





