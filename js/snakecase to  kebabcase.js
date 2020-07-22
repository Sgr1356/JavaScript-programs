function  snakeToKebab(str){
    var  newstring= str.replace(/_/g,'-');
    return newstring;
}
console.log(snakeToKebab('total_number'));


