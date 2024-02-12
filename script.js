const leftBtn = document.getElementById('left_btn')
const rightBtn = document.getElementById('right_btn')
const clear_btn = document.getElementById('clear_btn')


let rightText = document.getElementById('text-2')
let leftText = document.getElementById('text-1')


leftBtn.addEventListener('click', function(){
    leftText.value += '\n' + rightText.value;
    rightText.value = '';
})

rightBtn.addEventListener('click', function (){
    rightText.value += '\n' + leftText.value;
    leftText.value = '';
})

clear_btn.addEventListener('click', function (){
    leftText.value = '';
    rightText.value = '';
})