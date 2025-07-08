/*
1) even number print use of list
2)factorial number
3)multiplication table
4)sum of natural number; 
5)find largest number
6) leap year check
*/
function evenNumber(){
let numbers =[22,21,30,31,50,41,60,65];
for (let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        console.log(numbers[i]);
    }
}
}
module.exports = evenNumber;
