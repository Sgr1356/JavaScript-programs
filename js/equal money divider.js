
var foodcost=prompt("place your total amount");
var no = prompt("No of people");
document.write("food cost is :" , foodcost,"<br>");
document.write("each one has to pay : " ,(foodcost/no).toFixed(2),"<br>");