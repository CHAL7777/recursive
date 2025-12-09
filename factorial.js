const fact=function(num){
    sum=1;
    for(let i=num;i>=1;i--){
        sum=sum*i;
        console.log(sum);
        
    }

    return sum;
}
const result=fact(5);
result