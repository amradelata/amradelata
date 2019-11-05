let allCards = document.querySelectorAll('.my-card');
let buttons = document.querySelectorAll('button')

buttons.forEach(category => category.addEventListener('click', function (){
   document.querySelector('.top-button .active').classList.remove('active');
        category.classList.add('active');

	allCards.forEach(card =>{

		if(category.id === 'all'){
			card.classList.remove('hide')
			return;
		}
		if(category.id !== card.getAttribute('data-name') ){
			card.classList.add('hide')
		}else{
			card.classList.remove('hide')
		}

	})
}))