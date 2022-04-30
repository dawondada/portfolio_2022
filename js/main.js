// main.js

window.addEventListener("load", () => {

    // content1 마우스 이벤트 

    const flower1 = document.querySelector('.ff1');
    const flower2 = document.querySelector('.ff2');
    
    // const container = document.querySelector("#wrap");
    
    // container.addEventListener("mousemove", (e) => {
    
    //     let mouseX = e.clientX;
    //     let mouseY = e.clientY;
    
    //     cursor1.style.top = mouseY + 20 + "px";
    //     cursor1.style.left = mouseX + 20 + "px";
    // });
    
    
    let mouseX = 0;
    let mouseY = 0;
    
    let cursorX = 0;
    let cursorY = 0;
    let cursorX2 = 0;
    let cursorY2 = 0;
    
    let speed = 0.35; 
    let speed2 = 0.5;
    
    function animate() {
        let distX = mouseX - cursorX;
        let distY = mouseY - cursorY;
    
        cursorX = cursorX + (distX * speed);
        cursorY = cursorY + (distY * speed);
        cursorX2 = cursorX + (distX * speed2);
        cursorY2 = cursorY + (distY * speed2);
    
        flower1.style.left = cursorX + 'px';
        flower1.style.top = cursorY  +'px';
        flower2.style.left = cursorX2 + 'px';
        flower2.style.top = cursorY2+'px';
    
        requestAnimationFrame(animate);
    }
    
    animate();
    
    document.addEventListener('mousemove', (event) => {
        mouseX = event.pageX;
        mouseY = event.pageY;
    })

    //click 이벤트
    const startBtn = document.querySelector(".btn_start");
    const bodyMain = document.querySelector("body");
    const moveBear = document.querySelector(".move");
    const walkBear = document.querySelector(".bear");

    const skill = document.querySelector(".skill");
    const profile = document.querySelector(".profile");

    const sectionInner = document.querySelectorAll(".section_inner")
    const contSam = sectionInner[1];
    const contCj = sectionInner[2];
    const contLnl = sectionInner[3];
    const contMi = sectionInner[4];
    const contKakao = sectionInner[5];
    const contCss = sectionInner[6];

    const btnTop = document.querySelector(".btn_top");
    const bubbleArea = document.querySelector(".bubble_area");


    console.log(contCss);


    //시작
    startBtn.addEventListener('click', () => {
        bodyMain.classList.remove("on");
        moveBear.classList.remove("on");
        walkBear.classList.remove("on");
        flower1.classList.add("on");
        flower2.classList.add("on");
        startBtn.classList.remove("on");
    });

    //재시작
    const topBtn = document.querySelector(".btn_top");
    const skillBtn = document.querySelector(".skill_btn");

    topBtn.addEventListener("click", () => {

        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

        bodyMain.classList.add("on");
        moveBear.classList.add("on");
        walkBear.classList.add("on");
        flower1.classList.remove("on");
        flower2.classList.remove("on");
        startBtn.classList.add("on");

        skill.classList.remove("on");
        profile.classList.remove("on");
        contSam.classList.remove("on");
        contCj.classList.remove("on"); 
        contLnl.classList.remove("on"); 
        contMi .classList.remove("on");
        contKakao.classList.remove("on"); 
        contCss.classList.remove("on"); 
    
        btnTop.classList.remove("on");
        bubbleArea.classList.remove("on"); 

    });    

    //scroll
    const bearScroll = document.querySelector(".bear_scroll");
    const flyingBear = document.querySelector(".flying_bear");
    const content = document.querySelector("#container > div");
    const contHeight = content.offsetHeight;
    const contents = document.querySelectorAll("#container > div");
    const contLenght = contents.length;
    let scrollPosition = document.documentElement.scrollTop || 0; 

    window.addEventListener("scroll", () => {
        let scrollTop = document.querySelector("html").scrollTop;

        if(scrollTop<500){
            flyingBear.classList.add("off");
        }else{
            flyingBear.classList.remove("off");
        }
        bearScroll.style.top = (scrollTop + 200) + "px";

        let positionY = document.documentElement.scrollTop;
        let direction = positionY - scrollPosition >=0? 1:-1;
        
        scrollPosition = positionY

        console.log(direction);

        // let contNum = 0;
        // if(direction===1){
        //     for(let i=0;i<contLenght;i++){
        //         window.scroll({
        //             top: i*contHeight,
        //             left: 0,
        //             behavior: "smooth"
        //         });
        //         contNum = i;
        //     }
        // }


        //스크롤 높이 이벤트
        if(scrollTop > contHeight*1 && scrollTop <= contHeight*2){
            skill.classList.add("on");
            profile.classList.add("on"); 
        }
        if(scrollTop > contHeight*2 && scrollTop <= contHeight*3){
            contSam.classList.add("on");
        }
        if(scrollTop > contHeight*3 && scrollTop <= contHeight*4){
            contCj.classList.add("on");
        }
        if(scrollTop > contHeight*4 && scrollTop <= contHeight*5){
            contLnl.classList.add("on");
        }
        if(scrollTop > contHeight*5 && scrollTop <= contHeight*6){
            contMi.classList.add("on");
        }
        if(scrollTop > contHeight*6 && scrollTop <= contHeight*7){
            contKakao.classList.add("on")
        }
        if(scrollTop > contHeight*7 && scrollTop <= contHeight*7.8){
            contCss.classList.add("on");
        }
        if(scrollTop > contHeight*7.8){
            btnTop.classList.add("on");
            bubbleArea.classList.add("on");
        }

    });

    //팝업
    const miApp = document.querySelector(".mi_app");
    miApp.addEventListener("click",(e) => {
        popApp(e);
        e.preventDefault();
    });

    function popApp(){
        const miAppUrl = "http://dawon9416.dothome.co.kr/mi_app/";
        let miAppOption = "top=80, left=500, width=375, height=815";
        window.open(miAppUrl,"mininal app",miAppOption);
    }

    const kakaoApp = document.querySelector(".kakao_app");
    kakaoApp.addEventListener("click", (e) => {
        popKakao(e);
        e.preventDefault();
    });
    
    function popKakao(){
        const kakaoUrl ="https://dawondada.github.io/react_kakao_app_2022/";
        let kakaoOption = "top=80, left=500, width=378, height=815";
        window.open(kakaoUrl,"kakao app",kakaoOption);
    }
    
    const mainTitle = document.querySelectorAll("#main_title path");

    //svg title 애니메이션
    for(let i=0;i<mainTitle.length;i++){
        console.log(`${i} ${mainTitle[i].getTotalLength()}`)
    }
});