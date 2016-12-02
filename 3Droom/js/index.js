window.onload=function () {
    var clientW=document.documentElement.clientWidth;
    var clientH=document.documentElement.clientHeight;
    var scene=document.querySelector(".scene");
    var room=document.querySelector(".room");
    var floor=document.querySelector(".panel:last-child");
    var ceil=document.querySelector(".panel:first-child");
    floor.style.width=floor.style.height=ceil.style.width=ceil.style.height=clientW+"px";
    var bottom1=document.querySelector(".panel:nth-child(5)")
    var bottom2=document.querySelector(".panel:nth-child(4)")
    bottom1.style.transform="translate3d(0,0,"+clientW+"px)";
    floor.style.top=-(clientW-clientH)+"px";
    room.style.transformOrigin="center center "+clientW/2+"px";

    bottom2.onclick=function () {
        room.style.transition = "transform 2s ease";
        room.style.transform = "translateZ(-500px) rotate3d(0,1,0,180deg)";
     }
        var angel = 0;
        var angel1 = 0;
        document.onmousedown = function (e) {
            var startX = e.clientX;
            var startY = e.clientY;
            document.onmousemove = function (e) {
                room.style.transition = "none";
                e.preventDefault();
                var moveX = e.clientX;
                var moveY = e.clientY;

                angel = Math.abs(moveX - startX) > Math.abs(moveY - startY) ? moveX - startX : moveY - startY;

                room.style.transform = "translate3d(0,0,-500px) rotate3d(0,1,0," + (angel1 + angel) + "deg)";

            }
            document.onmouseup = function () {
                angel1 += angel;
                document.onmousemove = null;
                document.onmouseup = null;
                console.log(angel1)
            }
            e.preventDefault();

        }



}