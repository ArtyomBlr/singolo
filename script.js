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
        let changedOrderNumber = (i++) + Math.floor((Math.random()*20));
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


// function for slider


/*const PHONE = document.querySelectorAll('.photo-vertical')[0];
const PHONE_HOR = document.querySelectorAll('.photo-horizontal')[0];
const DIV_WITH_PHONE = document.querySelectorAll('.screen')[0];
const DIV_WITH_PHONE_HOR = document.querySelectorAll('.screen_hor')[0];


PHONE.addEventListener('click', () => {
    if (DIV_WITH_PHONE.querySelectorAll('.off_screen')[0].style.visibility === 'hidden') {
        DIV_WITH_PHONE.querySelectorAll('.off_screen')[0].style.visibility = 'visible';
    } else if (DIV_WITH_PHONE.querySelectorAll('.off_screen')[0].style.visibility === 'visible') {
        DIV_WITH_PHONE.querySelectorAll('.off_screen')[0].style.visibility = 'hidden';
    };
});*/

const MAIN_SLIDER = document.querySelectorAll('.slider')[0];
const SLIDER1 = document.querySelectorAll('.wrapper_for_slider')[0];
const SLIDER2 = document.querySelectorAll('.wrapper_for_slider2')[0];

const SLIDER_ARR = [SLIDER1, SLIDER2];

const BUTTON_LEFT = document.querySelectorAll('.buttonl')[0];
const BUTTON_RIGHT = document.querySelectorAll('.buttonr')[0];

let i = 0;

BUTTON_LEFT.onclick = function() {
    SLIDER_ARR[i].style.display = 'none';
    i--;

    if (i < 0) {
        i = SLIDER_ARR.length - 1;
    }

    SLIDER_ARR[i].style.display = 'block';   
}

BUTTON_RIGHT.onclick = function() {
    SLIDER_ARR[i].style.display = 'none';
    i++;

    if (i >= SLIDER_ARR.length) {
        i = 0;
    }

    SLIDER_ARR[i].style.display = 'block';
}

BUTTON_LEFT.addEventListener('click', changeSliderBackGroundLeft);

function changeSliderBackGroundLeft(){
    if(SLIDER_ARR[0].style.display == 'block') {
        MAIN_SLIDER.classList.remove('slider_blue');
    } else {
        MAIN_SLIDER.classList.add('slider_blue');
    }
}

BUTTON_RIGHT.addEventListener('click', changeSliderBackGroundRight);

function changeSliderBackGroundRight(){
    if(SLIDER_ARR[0].style.display == 'block') {
        MAIN_SLIDER.classList.remove('slider_blue');
    } else {
        MAIN_SLIDER.classList.add('slider_blue');
    }
}


/*document.querySelectorAll('.wrapper_for_slider').forEach((el) => {
    if(el.style.display == 'block') {
        MAIN_SLIDER.style.background = '#f06c64';
    } else if(el.style.display == 'none') {
        MAIN_SLIDER.style.background = '#648BF0';
    }
})*/


const VERTICAL_PHONE = document.querySelectorAll('.screen_ver')[0];
const HORIZONTAL_PHONE = document.querySelectorAll('.screen_hor')[0];
const GROUP_PHONE = document.querySelectorAll('.screen_main')[0];

const createDivVertical = document.createElement("div");
const createDivHorizontal = document.createElement("div");

const createDivMain1 = document.createElement("div");
const createDivMain2 = document.createElement("div");
const createDivMain3 = document.createElement("div");

const createDivOffScreenMain1 = document.createElement("div");
const createDivOffScreenMain2 = document.createElement("div");
const createDivOffScreenMain3 = document.createElement("div");

VERTICAL_PHONE.appendChild(createDivVertical);
HORIZONTAL_PHONE.appendChild(createDivHorizontal);

let phoneBlock1 = GROUP_PHONE.appendChild(createDivMain1);
let phoneBlock2 = GROUP_PHONE.appendChild(createDivMain2);
let phoneBlock3 = GROUP_PHONE.appendChild(createDivMain3);

createDivVertical.style.cssText = "position: absolute; top: 66px; left: 16px; width: 189px; height: 334px; border-radius: 2px; background: black; visibility: hidden;"
createDivHorizontal.style.cssText = "position: absolute; top: 16px; left: 62px; width: 334px; height: 189px; border-radius: 2px; background: black; visibility: hidden;"

phoneBlock1.style.cssText = "position: absolute; top: 109px; left: 0px; width: 140px; height: 298px; border-radius: 17px; z-index: 2;"
phoneBlock2.style.cssText = "position: absolute; top: 0px; left: 140px; width: 228px; height: 485px; border-radius: 28px; z-index: 2;"
phoneBlock3.style.cssText = "position: absolute; top: 109px; right: 16px; width: 140px; height: 298px; border-radius: 17px; z-index: 2;"

let offScreenBlock1 = phoneBlock1.appendChild(createDivOffScreenMain1);
let offScreenBlock2 = phoneBlock2.appendChild(createDivOffScreenMain2);
let offScreenBlock3 = phoneBlock3.appendChild(createDivOffScreenMain3);

offScreenBlock1.style.cssText = "position: absolute; top: 40px; left: 8px; width: 125px; height: 219px; border-radius: 2px; background: black; z-index: 3; visibility: hidden;"
offScreenBlock2.style.cssText = "position: absolute; top: 69px; left: 14px; width: 201px; height: 354px; border-radius: 2px; background: black; z-index: 3; visibility: hidden;"
offScreenBlock3.style.cssText = "position: absolute; top: 40px; right: 8px; width: 125px; height: 219px; border-radius: 2px; background: black; z-index: 3; visibility: hidden;"

VERTICAL_PHONE.addEventListener('click', offScreenVertical)

function offScreenVertical() {
    if (createDivVertical.style.visibility === 'hidden') {
        createDivVertical.style.visibility = 'visible';
    } else if (createDivVertical.style.visibility === 'visible') {
        createDivVertical.style.visibility = 'hidden';
    };
}

HORIZONTAL_PHONE.addEventListener('click', offScreenHorizontal)

function offScreenHorizontal() {
    if (createDivHorizontal.style.visibility === 'hidden') {
        createDivHorizontal.style.visibility = 'visible';
    } else if (createDivHorizontal.style.visibility === 'visible') {
        createDivHorizontal.style.visibility = 'hidden';
    };
}

phoneBlock1.addEventListener('click', offScreenMain1)

function offScreenMain1() {
    if (createDivOffScreenMain1.style.visibility === 'hidden') {
        createDivOffScreenMain1.style.visibility = 'visible';
    } else if (createDivOffScreenMain1.style.visibility === 'visible') {
        createDivOffScreenMain1.style.visibility = 'hidden';
    };
}

phoneBlock2.addEventListener('click', offScreenMain2)

function offScreenMain2() {
    if (createDivOffScreenMain2.style.visibility === 'hidden') {
        createDivOffScreenMain2.style.visibility = 'visible';
    } else if (createDivOffScreenMain2.style.visibility === 'visible') {
        createDivOffScreenMain2.style.visibility = 'hidden';
    };
}

phoneBlock3.addEventListener('click', offScreenMain3)

function offScreenMain3() {
    if (createDivOffScreenMain3.style.visibility === 'hidden') {
        createDivOffScreenMain3.style.visibility = 'visible';
    } else if (createDivOffScreenMain3.style.visibility === 'visible') {
        createDivOffScreenMain3.style.visibility = 'hidden';
    };
}