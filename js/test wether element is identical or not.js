
// to test wether element is identical or not

function identical(array){
    var first=array[0];
    for(var i=1;i<array.length;i++){
        if(array[i]!=first){
            return false;
        }
    }
    return true;
}