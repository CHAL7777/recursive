const power=function(base,exp){

//   if(exp==0){
//     return 1;
//   }
//   if(exp==1){
//     return base;
//   }

  
//     return base*power(base,exp-1);

if(exp<0){
    return `you entered negative integers`;
}
  else if(exp==0){
    return base;
  }
  return base**exp;
}
const result=power(10,3);
