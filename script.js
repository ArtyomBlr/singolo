const PORTFOLIO = document.querySelectorAll('.portfolio-pictures')[0];



// function for img blocks addBorder 

PORTFOLIO.addEventListener('click', addBorder, false);

function addBorder(event) {
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-pictures-border'));
    event.target.classList.add('portfolio-pictures-border');
}



