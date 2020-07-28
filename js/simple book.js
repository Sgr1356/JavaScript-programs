// addtion of books
var books=[]
var input=prompt('which operation you want to perform [add | list | exit] : ')
 while (input!='exit'){
     if( input=='add'){
         var newbook=prompt('Enter Name of Book to Add : ');
         books.push(newbook);
     }
     else if (input='list'){
         console.log('List of Available Books : ');
         console.log(books);
     }
     else{
         console.log('Choose valid Option ')
     }
     var input=prompt('which operation you want to perform [add|list|exit] : ')
 }
 console.log('Thanks for choosing our Application')
