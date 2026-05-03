// const fact=function(num){
//     sum=1;
//     for(let i=num;i>=1;i--){
//         sum=sum*i;
//         console.log(sum);
        
//     }

//     return sum;
// }
// const result=fact(5);
// result

// const fact=function(num){
//     if(num===1){
// return 1;
//     }
//     return num*fact(num-1);
// }
// const result=fact(1);
// result
const fact=function(num){
    if(num===1){
        return 1;
    }
    else{
        return num+fact(num-1);
    }
}
const result=fact(5);
result