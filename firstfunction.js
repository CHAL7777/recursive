const count=function(num){
    if(num<=0){
        console.log("all done");
        
        return;
    }
    console.log(num);
    num--;
    count(num);
    
}

count(12);