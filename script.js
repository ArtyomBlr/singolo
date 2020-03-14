// function for img blocks addBorder, changeButtonActivity and changeImgOrder for portfolio

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

// function for form submitForm and closeMessage

const FORM_BUTTON_SUBMIT= document.querySelectorAll('.form-button')[0];
const FORM_BUTTON_OK= document.querySelectorAll('#button_close')[0];
const HIDDEN_BLOCK= document.querySelectorAll('#message')[0];
const FORM = document.querySelectorAll('.form-to-use')[0];

FORM_BUTTON_SUBMIT.addEventListener('click', submitForm, false);

function submitForm(event){
    event.preventDefault();
    let subject = document.querySelectorAll('#subject')[0].value.toString();
    if(subject == ""){
        document.querySelectorAll('#theme')[0].innerText = "Без темы";
    } else {
        document.querySelectorAll('#theme')[0].innerText = 'Тема: ' + subject;
    }

    let textArea = document.querySelectorAll('#textarea')[0].value.toString();
    if(textArea == ""){
        document.querySelectorAll('#description')[0].innerText = "Без описания";
    } else {
        document.querySelectorAll('#description')[0].innerText = 'Описание: ' + textArea;
    }
    HIDDEN_BLOCK.style.visibility="visible";
}

FORM_BUTTON_OK.addEventListener('click', closeMessage, false);

function closeMessage(event){
    HIDDEN_BLOCK.style.visibility="hidden";
}
