function stringNTimes(str,n){
    
    result=''
    var count= 1;
    while (count<=n){
        result=result+str;
        count++;

    }
    return result;

}

console.log(stringNTimes('sagar',3));
