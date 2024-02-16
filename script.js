let titleCount = 1;
let totalPrice =0;

const cards = document.getElementsByClassName('card');

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
   card.addEventListener('click',function(){
const title =card.querySelector('h3').innerText;
const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);

const titleContainer = document.getElementById('title-container')
const p = document.createElement('p');
p.innerText = titleCount + '. ' + title;
titleCount++;

titleContainer.appendChild(p);

// calculate price 
totalPrice += price;
document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);


   })
}


const btn = document.getElementById('apply-btn');
btn.addEventListener('click',  function(){
    // get the value from input
const cuponElement = document.getElementById('input-field').value;
const cuponCode = cuponElement.split(' ').join('').toUpperCase();


if(totalPrice >= 200){
if(cuponCode === 'SELL200'){

const discountElement = document.getElementById('discountPrice');
const discountAmount = totalPrice * 0.2;
// console.log(discountAmount);
discountElement.innerText = discountAmount.toFixed(2);

// rest total calculation

const restTotal = document.getElementById('total');

restTotal.innerText = totalPrice - discountAmount.toFixed(2);
// for validatiom
document.getElementById('input-field').value = '';
}else{
    alert('invalid cupon code')
    document.getElementById('input-field').value = '';
}

}else{
    alert('please at least $200 spent koren');
    document.getElementById('input-field').value = '';
}



})