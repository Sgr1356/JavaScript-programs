console.log('sagar');
if (localStorage.getItem('cart')== null){
    var cart={};

}
else{
    cart=JSON.parse(localStorage.getItem('cart'));
}
// class cart p click then run function
$('.cart').click(function(){
    console.log('clicked');
})
