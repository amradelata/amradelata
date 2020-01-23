let allCards = document.querySelectorAll('.my-card')
let buttons = document.querySelectorAll('button')
let phonePars = document.getElementById('phonePars')
let topbtn = document.querySelector('.top-buttonphone')
let navIcon = document.getElementById('phoneParsNave')
let manMeue = document.querySelector('.my-buttonsPhone')
navIcon.addEventListener('click', () => {
  // console.log('click')
  manMeue.classList.toggle('disblay-block')
})
buttons.forEach(category =>
  category.addEventListener('click', function () {
    // document.querySelector('.top-button .active').classList.remove('active');
    category.classList.add('active')
    allCards.forEach(card => {
      if (category.id === 'all') {
        card.classList.remove('hide')
        return
      }
      if (category.id !== card.getAttribute('data-name')) {
        card.classList.add('hide')
      } else {
        card.classList.remove('hide')
      }
    })
  })
)
buttons.forEach(category =>
  category.addEventListener('click', function () {
    category.classList.add('active')
    allCards.forEach(card => {
      if (category.id === 'all') {
        card.classList.remove('hide')
        return
      }
      if (category.id !== card.getAttribute('data-name')) {
        card.classList.add('hide')
      } else {
        card.classList.remove('hide')
      }
    })
  })
)
phonePars.addEventListener('click', () => {
  topbtn.style.display = 'block !important'
  topbtn.classList.toggle('heid')
})
