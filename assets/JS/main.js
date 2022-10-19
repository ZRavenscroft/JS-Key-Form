var ball = document.querySelector('.ball');
var left = 0;
var top1 = 0;
var bottom = 0;
var right = 0;


document.onkeydown = function (e) {
    console.log(e);
    if (e.key == 'ArrowRight') {
        ball.style.left = left + 'px';
        left++;
    }
    if (e.key == 'ArrowDown') {
        ball.style.top = top1 + 'px';
        top1++;
    }

}
document.onkeyup = function (ev){
    console.log(ev);
    if (ev.key == 'ArrowUp') {
        ball.style.bottom = bottom + 'px';
        bottom++;
    }
    if (ev.key == 'ArrowLeft') {
        ball.style.right = right + 'px';
        right++;
    }
}




