function Sum_of_array(array1, array2) 
{
  var result = [];
  var counter = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

 while (counter < array1.length && counter < array2.length) 
  {
    result.push(array1[counter] + array2[counter]);
    counter++;
  }

 if (counter === array1.length) 
 {
    for (x = counter; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = counter; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(Sum_of_array([1,0,2,3,4], [3,5,6,7,8,13]));