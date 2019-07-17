let canvas = document.getElementById('canvas');
let context;

const slide = document.querySelector('#projects img');
const caption = document.querySelector('#projects figcaption');

const images = [
    {src:'nature.jpg', name:'<a href="#">accessible web form</a>'},
    {src:'Screenshot (12).png', name:'<a href="#">creditcardapp</a>'},
    {src:'Screenshot (16).png', name:'<a href="#">fractions calculator</a>'},
]
let i = 0;


window.onload = setInterval(() => {  
    
    if(i<images.length){
        slide.src = images[i].src;
        caption.innerHTML = images[i].name;
        i++;
    }else{
        i = 0;
        slide.src = images[i].src;
        caption.innerHTML = images[i].name;
        i++;
    }    
}, 5000);


    
