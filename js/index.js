// Your code goes here
const navHover = document.querySelector('.nav');
navHover.addEventListener("mouseover", (e) => {
    navHover.style.backgroundColor = "red"
});
navHover.addEventListener('mouseleave', e =>{
    navHover.style.backgroundColor = 'white'
});
const keyDown = document.querySelector('html');
keyDown.addEventListener('keydown', e => {
   if (e.keyCode === 82) {
    keyDown.style.backgroundColor = 'red';
   }
});
keyDown.addEventListener('keyup', e => {
    keyDown.style.backgroundColor = 'white'
});

const busWheel = document.querySelector('img');
busWheel.addEventListener('wheel', e => {
    busWheel.style.transform = `scale(1.2)`;
})
busWheel.addEventListener('mouseleave', e => {
    busWheel.style.transform = 'scale(1)';
})

const buttonClick = document.querySelectorAll('.btn')
buttonClick[0].addEventListener('click', e => {
    buttonClick[0].style.backgroundColor = "purple"
})
buttonClick[1].addEventListener('click', e => {
    buttonClick[1].style.backgroundColor = "purple"
})
buttonClick[2].addEventListener('click', e => {
    buttonClick[2].style.backgroundColor = "purple"
})

window.addEventListener('resize', e => {
    const changeH1 = document.querySelector('h1');
    changeH1.textContent = "Funner Van"
})
const revertH1 = document.querySelector('h1')
revertH1.addEventListener('dblclick', e => {
    revertH1.textContent = "Fun Bus"
})

const copyTitle = document.querySelector('html')
copyTitle.addEventListener('copy', e => {
    window.alert("You have copied a thing");
});
const cutTitle = document.querySelector('html')
cutTitle.addEventListener('cut', e => {
    window.alert('That will be tought to cut');
});

// prevent default

const link = document.querySelectorAll('a')
link[0].addEventListener('click', e => {
    e.preventDefault();
})
link[1].addEventListener('click', e => {
    e.preventDefault();
})
link[2].addEventListener('click', e => {
    e.preventDefault();
})
link[3].addEventListener('click', e => {
    e.preventDefault();
})