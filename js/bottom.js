var scroll = document.getElementById("scroll");
var ul = document.getElementById("ul");
var lis = document.getElementsByTagName('li');
var ulLis = ul.children;
var liWidth = ul.children[0].offsetWidth;
var spans = document.getElementsByTagName('span');
var img = ul.getElementsByTagName('img');
function animate(obj,target){
    clearInterval(obj.timer);
    var speed = obj.offsetLeft < target ? 30 : -30;
    obj.timer = setInterval(function(){
        var result = target - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + speed + "px";
        if (Math.abs(result) <= Math.abs(speed)) {
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }
    },10);
}
var key = 0;
timer = setInterval(autoplay,1000);// 自动轮播
function autoplay(){
    key++;
    if(key > ulLis.length-4){
        ul.style.left = 0;
        key = 1;
    }
    animate(ul,-key*liWidth);
}