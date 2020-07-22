// javascript important method 
var array1=[10,20,30,40,50]
console.log(array1)
// accessing array by index position
console.log(array1[0])
console.log(array1[3])
console.log(array1[4])
// adding element in array1
array1[5]='sagar'
console.log(array1)
// push always add element to last
array1.push(60)
console.log(array1)
// pop always delete element from last
array1.pop()
console.log(array1)
// same as push but add in 1st position
array1.unshift(70)
console.log(array1)
// same as pop but delete 1st position
array1.shift()
console.log(array1)

// provide index of element 
array1.indexOf(20)
// provide begin to n-1 element
array1.slice(0,3)
console.log(array1)