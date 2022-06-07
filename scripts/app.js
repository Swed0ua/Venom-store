
// Multi range налаштування
var lowerSlider = document.querySelector('#lower'),
   upperSlider = document.querySelector('#upper'),
   tgl = lowerSlider ? true : false;
let lowerVal = tgl ? parseInt(lowerSlider.value) : '';
   upperVal = tgl ? parseInt(upperSlider.value) : '';

if (tgl) {
    upperSlider.oninput = function() {
        lowerVal = parseInlowerSlider.value;
        upperVal = parseInt(upperSlider.value);
        
        if (upperVal < lowerVal + 4) {
           lowerSlider.value = upperVal - 4;
           
           if (lowerVal == lowerSlider.min) {
              upperSlider.value = 4;
           }
        }
     };
     
     
     lowerSlider.oninput = function() {
        lowerVal = parseInt(lowerSlider.value);
        upperVal = parseInt(upperSlider.value);
        
        if (lowerVal > upperVal - 4) {
           upperSlider.value = lowerVal + 4;
           
           if (upperVal == upperSlider.max) {
              lowerSlider.value = parseInt(upperSlider.max) - 4;
           }
     
        }
     };
}


/* Відслідковувач для вспливання і закриття фільтру на малих екранах */
const filtAarea = document.querySelector('.products__filtr'),
     filtrCloser = document.querySelector('.filter__closer'),
     filtrButton = document.querySelector('.filtr__btn');

if (filtAarea) {
    filtrButton.addEventListener('click', ()=> {
        filtAarea.classList.add(clss.active);
    })
    
    
    filtrCloser.addEventListener('click', ()=> {
        filtAarea.classList.remove(clss.active);
    })
}


// Модальне вікно

const modalCloser = document.querySelector('.modal__closer');
const modalOpener = document.querySelector('.modal__opener');
const modalArea = document.querySelector('.modal__wrapper')

if (modalCloser && modalArea && modalOpener) {
   modalCloser.addEventListener('click', ()=>{
      modalArea.classList.remove(clss.active);
   })
   
   
   modalOpener.addEventListener('click', ()=>{
      modalArea.classList.add(clss.active);
   })
}

const fullscrArea = document.querySelector('.product__fullscreen');
const fullscrOpener = document.querySelectorAll('.card-view__carusel1 > .carusel__item');

if (fullscrArea) {
   modalCloser.addEventListener('click', ()=>{
      fullscrArea.classList.remove(clss.active);
   })

   fullscrOpener.forEach(e => {
      e.addEventListener('click', ()=>{
      fullscrArea.classList.add(clss.active);
      })
   })
}


// Radio

const radiosBurger = document.querySelectorAll('.burger__select>.inputs__radio');

radiosBurger.forEach(element => {
   element.addEventListener('click', () => {
      radiosBurger.forEach(el => {
         el.classList.remove(clss.select)
         el.classList.remove(clss.active)
      })

      element.classList.add(clss.select)
   })
})

/* Burger steep 2 */

const itemLink = document.querySelectorAll('.item__link');
const itemPrev = document.querySelectorAll('.subitem._prev');
const burger = document.querySelector('.burger');

itemLink.forEach(e => {
   let element = e.querySelector('.subitems');

   e.addEventListener('click', ()=>{
      element.classList.add(clss.active)
      burger.classList.add(clss.close)
   })
})

itemPrev.forEach(e => {
   e.addEventListener('click', (event)=>{
      event.stopPropagation();
      e.offsetParent.classList.remove(clss.active);
      burger.classList.remove(clss.close);
   })
})

const searchArea = document.querySelector('.search__wrapp');
const searchInput = document.querySelector('.search__input');
const burgerBtn = document.querySelector('.burger__btn');
const burgerArea = document.querySelector('.nav__burger');


const actions = {
    openInput: 'openInput',
    activeInput: 'activeInput',
    activeBrg: 'activeBurger'
}

const clss = {
    active: '_active',
    close: '_close',
    open: '_open',
    select: '_select'
}


/* Відслідковує нажимання на кнопку бургер меню  */
burgerBtn.addEventListener('click', ()=> {
    if (burgerBtn.classList.contains(clss.active)) {
        toggleBurger(false)
    } else {
        toggleBurger(true)
        toggleInputClass(burgerArea, clss.active, actions.activeBrg, true)
    } 
})

/** 4 відслідковувачі для пошуку в шапці */
searchArea.addEventListener('click', ()=> {
    toggleInputClass(searchArea, clss.open, actions.openInput, true);
    toggleBurger(true);
    toggleInputClass(burgerArea, clss.active, actions.activeBrg, false)
})

searchInput.addEventListener('focus', () => {
    toggleInputClass(searchInput, clss.active, actions.activeInput, true);
    toggleInputClass(searchArea, clss.open, actions.openInput, true);
})

searchInput.addEventListener('input', () => {
    toggleInputClass(searchInput, clss.active, actions.activeInput, true);
})

searchArea.addEventListener('mouseleave', ()=> {
    toggleInputClass(searchArea, clss.active, actions.activeInput, false);
})


/** Світч кейс додає активні класи до елементів переданих в параметри */
const toggleInputClass =  (el, clases, action, type = false) => {
    switch (action) {
        case actions.openInput:
            if (type) {
                el.classList.add(clases)
            } else {
                el.classList.remove(clases)
            } 
            break;
        case actions.activeInput:
            if (type) {
                el.parentElement.parentElement.classList.add(clases)
            } else {
                el.classList.remove(clases)
            }
            break;
        case actions.activeBrg: 
            if (type) {
                el.classList.add(clases)
            } else {
                el.classList.remove(clases)
            }
    }
}

/** Для кнопки меню бургера додає активний клас */
const toggleBurger = (action = false) => {
    if (!action) {
        burgerBtn.classList.remove(clss.active);
        toggleInputClass(burgerArea, clss.active, actions.activeBrg, false)
        toggleInputClass(searchArea, clss.open, actions.openInput, false);
    } else {
        burgerBtn.classList.add(clss.active);
    }
}

/** Додає/віднімає активний клас для інпутів (checkbox)  **/
const inputArea = document.querySelectorAll('.input__area')
inputArea.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle(clss.active)
    })
})


$('.carusel').slick({
    infinite: true,
    dots: true
});


$('.card-view__carusel1').slick({
    infinite: true,
    dots: false,
    asNavFor: '.carusel__nav1',
    responsive: [
        {
          breakpoint: 570,
          settings: {
            arrows: false
          }
        }
      ]
});

$('.carusel__nav1').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    asNavFor: '.card-view__carusel1',
    responsive: [
      {
        breakpoint: 350,
        settings: {
          arrows: false
        }
      }
    ]
});

$('.contacts__carusel').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          arrows: false,
          dots: true
        }
      }
    ]
})


$('.productView__carusel').slick({
    infinite: true,
    dots: false,
    slidesToShow: 5,
    responsive: [
        {
          breakpoint: 1001,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 620,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            dots: true,
            slidesToShow: 2,
            arrows: false
          }
        },
        {
            breakpoint: 450,
            settings: {
              arrows: false,
              slidesToShow: 1,
              dots: true
            }
          }
      ]
})




$('.fullscr__carusel').slick({
  infinite: true,
  dots: false,
  asNavFor: '.fullscr__carusel-nav',
  responsive: [
    {
      breakpoint: 490,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});

$('.fullscr__carusel-nav').slick({
  infinite: true,
  dots: false,
  arrows: false,
  slidesToShow: 4,
  asNavFor: '.fullscr__carusel',
  responsive: [
    {
      breakpoint: 490,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});

