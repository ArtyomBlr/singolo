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

document.addEventListener('scroll', onScroll)

function onScroll(event) {

    const NAVI_BLOCK_A = document.querySelectorAll('.navbar a');
    const currentPosition = window.scrollY + 89;
    const ARTICLES = document.querySelectorAll('article');

    ARTICLES.forEach( el => {
        if(el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition){
            NAVI_BLOCK_A.forEach(elem => {
                elem.classList.remove('active__menu');
                if(el.getAttribute('id') === elem.getAttribute('href').substring(1)) {
                    elem.classList.add('active__menu');
                }
            })
        }
    })
}

/*const NAVI_BLOCK = document.querySelectorAll('.navbar');


NAVI_BLOCK[0].addEventListener('click', addStyleToNavigation, true);

function addStyleToNavigation(event){
    if(event.target.tagName !== 'A') return;
    else {
        NAVI_BLOCK[0].querySelectorAll('a').forEach(el => el.classList.remove('active__menu'));
        event.target.classList.add('active__menu');
    }
}*/


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
    FORM.reset();
}


// function for slider

const ITEM = document.querySelectorAll('.item');
const BUTTON_LEFT = document.querySelectorAll('.buttonl')[0];
const BUTTON_RIGHT = document.querySelectorAll('.buttonr')[0];
const MAIN_SLIDER = document.querySelectorAll('.slider')[0];

let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + ITEM.length) % ITEM.length;
    console.log(currentItem)
    console.log(n)
}

function hideItem(direction) {
	isEnabled = false;
	ITEM[currentItem].classList.add(direction);
	ITEM[currentItem].addEventListener('animationend', function() {
		this.classList.remove('activeSlider', direction);
	});
}

function showItem(direction) {
	ITEM[currentItem].classList.add('nextSlider', direction);
	ITEM[currentItem].addEventListener('animationend', function() {
		this.classList.remove('nextSlider', direction);
		this.classList.add('activeSlider');
		isEnabled = true;
	});
}


function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

BUTTON_LEFT.addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
    }

});

BUTTON_RIGHT.addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
    }
});

/*
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
}*/



const VERTICAL_PHONE = document.querySelectorAll('.screen_ver')[0];
const HORIZONTAL_PHONE = document.querySelectorAll('.screen_hor')[0];
const GROUP_PHONE = document.querySelectorAll('.screen_main')[0];

const ARTICLE_SLIDER = document.querySelectorAll('.slider')[0];
const ARTICLE = document.querySelectorAll('article')[0];


const OFFSCREEN_HOR = document.querySelectorAll('.off_screen_hor')[0];
const OFFSCREEN_VER = document.querySelectorAll('.off_screen_ver')[0];

const createDivVertical = document.createElement("div");
const createDivHorizontal = document.createElement("div");

VERTICAL_PHONE.appendChild(createDivVertical);
HORIZONTAL_PHONE.appendChild(createDivHorizontal);

/*const createDivMain1 = document.createElement("div");
const createDivMain2 = document.createElement("div");
const createDivMain3 = document.createElement("div");

const createDivOffScreenMain1 = document.createElement("div");
const createDivOffScreenMain2 = document.createElement("div");
const createDivOffScreenMain3 = document.createElement("div");*/


/*let phoneBlock1 = GROUP_PHONE.appendChild(createDivMain1);
let phoneBlock2 = GROUP_PHONE.appendChild(createDivMain2);
let phoneBlock3 = GROUP_PHONE.appendChild(createDivMain3);*/

createDivVertical.style.cssText = "position: absolute; top: 13.2%; left: 6.8%; width: 77%; height: 68%; border-radius: 2px; background: black; visibility: hidden;"
createDivHorizontal.style.cssText = "position: absolute; top: 6%; left: 12.6%; width: 68.7%; height: 77%; border-radius: 2px; background: black; visibility: hidden;"

/*phoneBlock1.style.cssText = "position: absolute; top: 109px; left: 0px; width: 140px; height: 298px; border-radius: 17px; z-index: 2;"
phoneBlock2.style.cssText = "position: absolute; top: 0px; left: 140px; width: 228px; height: 485px; border-radius: 28px; z-index: 2;"
phoneBlock3.style.cssText = "position: absolute; top: 109px; right: 16px; width: 140px; height: 298px; border-radius: 17px; z-index: 2;"
*/
/*let offScreenBlock1 = phoneBlock1.appendChild(createDivOffScreenMain1);
let offScreenBlock2 = phoneBlock2.appendChild(createDivOffScreenMain2);
let offScreenBlock3 = phoneBlock3.appendChild(createDivOffScreenMain3);*/

/*offScreenBlock1.style.cssText = "position: absolute; top: 40px; left: 8px; width: 125px; height: 219px; border-radius: 2px; background: black; z-index: 3; visibility: hidden;"
offScreenBlock2.style.cssText = "position: absolute; top: 69px; left: 14px; width: 201px; height: 354px; border-radius: 2px; background: black; z-index: 3; visibility: hidden;"
offScreenBlock3.style.cssText = "position: absolute; top: 40px; right: 8px; width: 125px; height: 219px; border-radius: 2px; background: black; z-index: 3; visibility: hidden;"
*/

VERTICAL_PHONE.addEventListener('click', offScreenVertical)

function offScreenVertical() {
    if (createDivVertical.style.visibility === 'hidden') {
        createDivVertical.style.visibility = 'visible';
    } else if (createDivVertical.style.visibility === 'visible') {
        createDivVertical.style.visibility = 'hidden';
    };
}



HORIZONTAL_PHONE.addEventListener('click', offScreenHorizontal)

    /*function offScreenHorizontal(){
        OFFSCREEN_HOR.style.visibility === 'hidden' ? OFFSCREEN_HOR.style.visibility = 'visible' : OFFSCREEN_HOR.style.visibility = 'hidden';
    }*/

    /*if(OFFSCREEN_HOR.style.visibility === 'hidden'){
        OFFSCREEN_HOR.style
    }*/

function offScreenHorizontal() {
    if (createDivHorizontal.style.visibility === 'hidden') {
        createDivHorizontal.style.visibility = 'visible';
    } else if (createDivHorizontal.style.visibility === 'visible') {
        createDivHorizontal.style.visibility = 'hidden';
    };
}

/*phoneBlock1.addEventListener('click', offScreenMain1)

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
}*/


/* ----------------------- burger menu --------------------------- */ 


const BURGER = document.querySelectorAll('.burger')[0];

const BURGER_LOGO = document.querySelectorAll('.burger_logo')[0];
const NEW_LOGO = document.querySelectorAll('.logo')[0];
const NEW_NAVBAR = document.querySelectorAll('.navbar')[0];
const NEW_NAVBAR_UL = document.querySelectorAll('.navbar ul')[0];
const NEW_NAVBAR_LI = document.querySelectorAll('.navbar ul li');
const NEW_NAVBAR_A = document.querySelectorAll('.navbar ul a');
const SHADOW = document.querySelectorAll('.shadowX')[0];


BURGER.addEventListener('click', createNavigation)

function createNavigation() {

    if(BURGER.style.transform === "rotate(0deg)"){
        BURGER.style.transform = "rotate(90deg)";

        BURGER_LOGO.classList.add('new_logo')
        NEW_LOGO.classList.add('new_singolo')
        NEW_NAVBAR.classList.add('new_navbar')
        NEW_NAVBAR_UL.classList.add('new_ul')

        NEW_NAVBAR_LI.forEach(el => {
            el.classList.add('new_li')
        })

        NEW_NAVBAR_A.forEach(el => {
            el.classList.add('new_a')
        })

        SHADOW.classList.add('shadow')

    } else {
        BURGER.style.transform = "rotate(0deg)";

        BURGER_LOGO.classList.remove('new_logo')
        NEW_LOGO.classList.remove('new_singolo')
        NEW_NAVBAR.classList.remove('new_navbar')
        NEW_NAVBAR_UL.classList.remove('new_ul')
                
        SHADOW.classList.remove('shadow')

    }

}

NEW_NAVBAR_A.forEach(el => {
   el.addEventListener('click', closeNavigation) 
})

SHADOW.addEventListener('click', closeNavigation)

function closeNavigation() {
    BURGER.style.transform = "rotate(0deg)";

    BURGER_LOGO.classList.remove('new_logo')
    NEW_LOGO.classList.remove('new_singolo')
    NEW_NAVBAR.classList.remove('new_navbar')
    NEW_NAVBAR_UL.classList.remove('new_ul')
                
    SHADOW.classList.remove('shadow')
}



