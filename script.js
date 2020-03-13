// function for img blocks addBorder and changeImgOrder

const PORTFOLIO = document.querySelectorAll('.portfolio-pictures')[0];


PORTFOLIO.addEventListener('click', addBorder, false);

function addBorder(event) {
    if(event.target !== event.currentTarget){
        PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-pictures-border'));
        event.target.classList.add('portfolio-pictures-border');
    }
}


const ACTIVE_BUTTONS = document.querySelectorAll('.buttons')[0];
ACTIVE_BUTTONS.addEventListener('click', changeImgOrder, false);

function changeImgOrder(event){
    if(event.target !== event.currentTarget){
        ACTIVE_BUTTONS.querySelectorAll('.buttons button').forEach(el => el.classList.remove('buttons-style'));
        ACTIVE_BUTTONS.querySelectorAll('.buttons button').forEach(el => el.classList.add('single-button'));
        event.target.classList.remove('single-button');
        event.target.classList.add('buttons-style');
    }
}





// function for navigation addStyle Active 

const NAVI_BLOCK = document.querySelectorAll('.navbar')[0];

NAVI_BLOCK.addEventListener('click', addStyleToNavigation, false);

function addStyleToNavigation(event){
    if(event.target.tagName !== 'A') return;
    else {
        NAVI_BLOCK.querySelectorAll('a').forEach(el => el.classList.remove('active__menu'));
        event.target.classList.add('active__menu');
    }
}






