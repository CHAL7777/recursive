const sum=function(num){
  if(num<0){
    return -1;
  }
    if(num===0){
        return 0;
    }
   else{
    
return Math.floor(num%10)+ Math.floor(sum(num/10));
   }
        
    
    
    

}
const result=sum(1233);
console.log(result);
