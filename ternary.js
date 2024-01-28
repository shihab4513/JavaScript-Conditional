const age=12;
// if(age>=18)
// {
//   console.log('You can vote.');
  
// }
// else{
//     console.log('You cant vote')   
// }
// Ternary way
// age>=18?console.log('vote dio'):console.log('Ghumaya thako')
let price=500;
const isLeader=true;
// if(isLeader===true)
// {
//     price=0;
// }
// else{
//     price=price+500;
// }
//price=isLeader===true?0:price+100;
// if(isLeader===true)
// {
//     if(price>1000)
//     {
//         price=price/2;
//     }
//     else{
//         price=0;
//     }
// }
// else{
//     price=price+1000;
// }

price=isLeader===true?price>1000?price/2:0:price+1000;
console.log(price);