const myButton =document.getElementById('myButton');
const hello = document.getElementById('le');


myButton.addEventListener("click" , event => {
    if(le.style.visibility === 'hidden') {
        le.style.visibility = 'visible';
        myButton.textContent = 'hide';
    }
    else {
        le.style.visibility = 'hidden';
        myButton.textContent = 'show';
    }
});
