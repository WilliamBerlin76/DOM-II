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

const busScroll = document.querySelector('img');
busScroll.addEventListener('wheel', e => {
    busScroll.style.transform = `scale(1.2)`;
})
busScroll.addEventListener('mouseleave', e => {
    busScroll.style.transform = 'scale(1)';
})