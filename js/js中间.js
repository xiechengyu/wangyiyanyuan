var pho = document.getElementsByClassName('pho');
pho[0].onmouseover = function () {
    pho[0].style.background = 'rgba(244,240,234)';
}
pho[0].onmouseout = function(){
    pho[0].style.background = '#fff';
}
pho[1].onmouseover = function () {
    pho[1].style.background = 'rgba(244,240,234)';
}
pho[1].onmouseout = function(){
    pho[1].style.background = '#fff';
}
pho[2].onmouseover = function () {
    pho[2].style.background = 'rgba(244,240,234)';
}
pho[2].onmouseout = function(){
    pho[2].style.background = '#fff';
}
pho[3].onmouseover = function () {
    pho[3].style.background = 'rgba(244,240,234)';
}
pho[3].onmouseout = function(){
    pho[3].style.background = '#fff';
}


function countTime() {
    var date = new Date();
    var now = date.getTime();
    var endDate = new Date("2018-07-17 18:00:00");
    var end = endDate.getTime();
    var leftTime = end - now;
    var d, h, m, s;
    if (leftTime >= 0) {
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    document.getElementById("_h").innerHTML = h ;
    document.getElementById("_m").innerHTML = m ;
    document.getElementById("_s").innerHTML = s ;
    setTimeout(countTime, 1000);

    function fn(a) {
        if(a < 10){
            return '0' + a;
        }else{
            return a;
        }
    }
}
countTime();

$('#mycarousel').carousel({
    pause: true,
    interval: false
});