
function luckysum(a,b,c){
    if (a==13){
        return 0;
    }
    if (b==13){
        return a;
 
    }
    if (c==13){
        return a+b;
 
    }
    return a+b+c;
 
 }
 console.log(luckysum(13,5,6));
 console.log(luckysum(5,13,6));
 console.log(luckysum(5,6,13));
 console.log(luckysum(5,6,7));