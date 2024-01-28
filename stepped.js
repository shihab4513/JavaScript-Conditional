const price=2600;
if(price>=5000)
{
    //10% discount
    const discount=price*10/100;
    const payAmount=price-discount;
    console.log(payAmount);
}
else if(price>2500)
{
//    5% discount
const discount=price*5/100;
const payAmount=price-discount;
console.log(payAmount);
}
else{
    console.log(price);
}
const age=17;
if(age<=12)
{
    console.log('You can eat for free');
    
}
else if(age>=60)
{
    //50% discount
    const discount=price*50/100;
    payAmount=price-discount;
    console.log(payAmount);
}
else{
    console.log(price);
}