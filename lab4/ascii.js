(function (){
    window.onload=function(){
    document.getElementById("stop_btn").disabled=true;
    document.getElementById("start_btn").onclick=startAnimation;
    document.getElementById("stop_btn").onclick=stopAnimation;
    document.getElementById("stop_btn").onchange=changeSize;
    document.getElementById("stop_btn").onclick=changeTurbo;
    };
    let counter=0;
    let timerInterval;
    let delayMs=250;
    let frames;
    let frameArr;
    function startAnimation(){
     let animation=document.getElementById("animation_select");
     let ani_option=animation.options[animation.selectedIndex].value;
    
     frames=ANIMATIONS[ani_option];
     frameArr=frame.split("=======\n")
     changeTurbo();
    
     changeSize();
    document.getElementById("start_btn").disabled=true;
    document.getElementById("stop_btn").disabled=false;
    }
    function stopAnimation(){
    window.clearInterval(timerInterval);
    document.getElementById("display_area").value=frame;
    document.getElementById("start_btn").disabled=false;
    document.getElementById("stop_btn").disabled=true;
    }
    function changeSize(){
    let size=document.getElementById("size_select");
    let size_option=size.options[size.selectedIndex].value;
    document.getElementById("display_area").style.fontSize=size_option;
    }
    function changeTurbo(){
        clearInterval(timerInterval);
        let isTurbo=document.getElementById("cbox").checked;
        if(isTurbo){
            delayMs=50;
        }else{
            delayMs=250;
        }
        timerInterval=setInterval(animation_callback,delayMs);
    }
    function animation_callback(){
    if(counter>=frameArr.length){
        counter=0;
    }else{
        document.getElementById("display_area").value=frameArr[counter];
        counter++;
    }
    }
    } ());


    
    
    
    
    
    
    
    