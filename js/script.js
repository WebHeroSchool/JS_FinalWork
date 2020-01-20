const addTime = document.getElementById('game');

let numberCarts = 3;
const qwer = document.querySelectorAll('.fruit_radio').forEach(function (radio) {
  radio.addEventListener('click', function () {
  	if (this.checked) {
      numberCarts=this.value;
    }
  });
});

const addTime12 = () => {
  const addTime1 = document.getElementById('wrapper');
  addTime1.className = 'active';
  
  const wrap = document.createElement('div');
  wrap.className = 'wrap-card';
  document.body.appendChild(wrap);
 
  for (i=0; i<numberCarts; i++) {
    
    const cartWrap = document.createElement('div');
    cartWrap.className = 'flip-card';
    
    const cartInner = document.createElement('div');
    cartInner.className = 'flip-card-inner';
   
    const cartInnerFront = document.createElement('div');
    cartInnerFront.className = 'flip-card-front';
    
    const createBackCart = document.createElement('img');
    createBackCart.className = 'card-turnoff card-og';

    const cartBack = document.createElement('div');
    cartBack.className = 'flip-card-back';
    
    const createFrontCart = document.createElement('img');
    createFrontCart.src = './img/frontCard.png';
    
    createBackCart.src = './img/backCard.png';
    createFrontCart.className = 'card-turn';

    wrap.appendChild(cartWrap);
    cartWrap.appendChild(cartInner);
    cartInner.appendChild(cartInnerFront);
    cartInnerFront.appendChild(createBackCart);
    
    cartInner.appendChild(cartBack);
    cartBack.appendChild(createFrontCart);
  }

  function getRandomCard() {
    const flipCards = document.querySelectorAll('.flip-card-back');
    const backCards = document.querySelectorAll('.card-turn');
    const bugCard = (function() {
        return Math.round(Math.random()*(flipCards.length-1));
    })();
    backCards[bugCard].src = "img/openCartGag.png";
}
getRandomCard();

  const allCards = document.querySelectorAll('.flip-card-inner');
  allCards.forEach(cf=>cf.addEventListener( 'click' , () => {
    cf.classList.add('active-back')
    const qaz = document.querySelectorAll('.card-turn');
    const qaz1 = document.querySelector('.wrap-card');
    const qaz2 = document.querySelectorAll('.card-turnoff');
    qaz2.forEach(cfg=>cfg.classList.remove('card-turnoff'))

    qaz.forEach(cfw=>cfw.addEventListener( 'click' , () => {
    document.body.removeChild(qaz1),
    addTime1.className = 'wrapper'
  }));
    qaz2.forEach(cfw1=>cfw1.addEventListener( 'click' , () => {
    document.body.removeChild(qaz1),
    addTime1.className = 'wrapper'
  }));
  }));
}

addTime.addEventListener('click',addTime12);