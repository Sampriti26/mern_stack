function multiplicationTable (){
    let num = 9;
    for(let i=1;i<=10;i++){
        let multi = num * i;
        console.log(num,"*",i,"=",multi);

    }
}
module.exports = multiplicationTable;