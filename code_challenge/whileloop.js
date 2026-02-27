//Print "Playwright" 5 times
let count=0;
while(count<5){
    console.log("Playwright");
    count++;
}       

//Print numbers from 1 to 10
let num=1;
while(num<=10){
    console.log(num);
    num++;
}           
//Print even numbers from 1 to 20
let evenNum=1;
while(evenNum<=20){
    if(evenNum%2===0){
        console.log(evenNum);
    }
    evenNum++;
}           
//Print the sum of first 10 natural numbers
let sum=0;
let i=1;                
while(i<=10){
    sum+=i;
    i++;
}
console.log("The sum of first 10 natural numbers is: " + sum);

//Print the multiplication table of 7
let number=7;       
let j=1;
while(j<=10){
    console.log(number + " x " + j + " = " + (number*j));
    j++;
}

