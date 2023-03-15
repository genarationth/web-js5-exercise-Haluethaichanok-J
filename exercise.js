/* Exercise1 */
/* part1 */
let customer=['Sofia', 'David', 'Juan'];
/* part2 */
customer[3]= 'Sara';
customer[4]='Augustin';
console.log(customer);
console.log(customer.shift());
/* part3 */
customer.splice(2,0,"Renata");
console.log(customer);
customer.push('Elena');
console.log(customer);
/* Exercise2 */


for(let j=0; j<1; j++){
    let star= '*';
    let sum="";
    for(let i=1;i<6;i++){
        sum = star+sum;
        console.log(sum);
    }
}




    /* Exercise3 */
    /* Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive. */
    function decreasing(xValue){
    while(xValue>=0){
        console.log(xValue);
        xValue -= 0.5;  
    }
    console.log('xValue is negative value');
    }
    decreasing(5);
   
/* Print all the odd numbers between 1 - 100. */
function printOddnum(){
for(let i=1; i<101;i++){
    if(i%2 === 1){
        console.log(i);
}}
}
printOddnum()

/* Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6] */
function square(n){
    let i=0;
    while(i<=n){
        console.log(`[${i}]`);
        i++;
    }
    }
    square(5);



/*  Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190 */
function findTotal(n){let total=0;
for(let i=1;i<=n;i++){
total = total+i;
}
console.log(total)}
findTotal(5);
findTotal(19);