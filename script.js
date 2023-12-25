const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    });
}

// sproduct page
var MainImg = document.getElementById('MainImg');
var smalImg = document.getElementsByClassName('small-img');

smalImg[0].onclick = function () {
    var MainImg_src = MainImg.src;
    MainImg.src = smalImg[0].src;
    smalImg[0].src = MainImg_src;
}
smalImg[1].onclick = function () {
    var MainImg_src = MainImg.src;
    MainImg.src = smalImg[1].src;
    smalImg[1].src = MainImg_src;
}
smalImg[2].onclick = function () {
    var MainImg_src = MainImg.src;
    MainImg.src = smalImg[2].src;
    smalImg[2].src = MainImg_src;
}
smalImg[3].onclick = function () {
    var MainImg_src = MainImg.src;
    MainImg.src = smalImg[3].src;
    smalImg[3].src = MainImg_src;
}

// .onclick="window.location.href='./sproduct.html';

// let pro_img = document.getElementsByClassName("pro");

// Array.from(pro_img).forEach(item => {
//     item.onclick = function() {
//         window.location.href = './sproduct.html';

//     };
// });