// function for img blocks addBorder, changeButtonActivity and changeImgOrder

const PORTFOLIO = document.querySelectorAll('.portfolio-pictures')[0];
const ACTIVE_BUTTONS = document.querySelectorAll('.buttons')[0];

PORTFOLIO.addEventListener('click', addBorder, false);

function addBorder(event) {
    if(event.target !== event.currentTarget){
        PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-pictures-border'));
        event.target.classList.add('portfolio-pictures-border');
    }
}

var imgCollection = document.querySelectorAll('.portfolio-pictures')[0].querySelectorAll('img');

/*for(let i = 1; i < imgCollection.length; i++){
    imgCollection[i].style.order=i++
}*/

imgCollection.forEach(function addOrder(value, i, arr){
    let order_number = i++
    value.style.order=order_number;
})

ACTIVE_BUTTONS.addEventListener('click', changeButtonActivity, false);

function changeButtonActivity(event){
    if(event.target !== event.currentTarget){
        ACTIVE_BUTTONS.querySelectorAll('.buttons button').forEach(el => el.classList.remove('buttons-style'));
        ACTIVE_BUTTONS.querySelectorAll('.buttons button').forEach(el => el.classList.add('single-button'));
        event.target.classList.remove('single-button');
        event.target.classList.add('buttons-style');
    }
}

ACTIVE_BUTTONS.addEventListener('click', changeImgOrder, false);

function changeImgOrder(event) {
    imgCollection.forEach(function changeOrder(value, i, arr){
        let changedOrderNumber = (i++) + Math.floor((Math.random()*10));
        value.style.order=changedOrderNumber;
    })
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






