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

        //제이쿼리 스크롤이 멈추면 0.3초후에 애니메이션 멈춤
        clearTimeout($.data(this,"scrollCheck"));

        $.data(this,"scrollCheck",setTimeout(function(){
            $(".bear").removeClass("on");
        },300));


        /*
        //content1
        if(scrollTop>= wt*0 && scrollTop<wt*1){
            //내용물 움직임 시작
            $("#content1 > section").addClass("on");
        }else{ //움직임 취소
            $("#content1 > section").removeClass("on");
        }
        */ 

    }); //scroll event

    //제이쿼리 키보드 조작
    $(document).keydown(function(e){ //이벤트객체
        if(e.keyCode == 39){ //오른쪽 방향키
            var scrollNow = $(document).scrollTop();
            $(window).scrollTop(scrollNow+50);
        }
        if(e.keyCode == 37){
            var scrollNow = $(document).scrollTop();
            $(window).scrollTop(scrollNow-50);
        }
    });//keyd

    /*
    window.addEventListener("keydown", (e) => {
    let key = e.key || e.keyCode;
    if(key == 39 ){
        var scrollNow = $(document).scrollTop();
        $(window).scrollTop(scrollNow+50);
    }
    });
    */ 

});