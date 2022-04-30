// sub_locknlock.js
window.addEventListener("load",function(){

    var winW = window.innerWidth;
  
    //body의 높이값 지정
    const content = document.querySelectorAll("#container > div");
    const Length = content.length;
    const containerWid = winW*Length;
    var bodyHt = document.querySelector("body").offsetHeight;
    bodyHt = containerWid;
    
    const bear = document.querySelector(".bear");

    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var bodyHt = document.querySelector("body");
	bodyHt.style.height	= containerWid+"px";

    let H = containerWid - winH;
    let W = containerWid - winW;
    let R = W / H;

    let scrollTop = document.documentElement.scrollTop;
    let scrollR  = scrollTop * R;

    let prevScrollTop = 0;

    //스크롤
    window.addEventListener("scroll",function(){
        winW = window.innerWidth;
		winH = window.innerHeight;

		H = containerWid - winH;
		W = containerWid - winW;
		R = W / H;

		scrollTop = document.documentElement.scrollTop;
		scrollR  = scrollTop * R;

		var container = document.querySelector("#container");
        container.style.transform = "translateX(-" + scrollR + "px)";

        let lastScrollTop = window.pageYOffset || 0;
        if(lastScrollTop > prevScrollTop){
            bear.classList.add("on");
            bear.classList.remove("left");
        }else if(lastScrollTop < prevScrollTop){
            bear.classList.add("on");
            bear.classList.add("left");
        }
        prevScrollTop = lastScrollTop;


    });

 





});