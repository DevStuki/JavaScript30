const divs = document.querySelectorAll('div');

function logText(e){
    console.log(this.classList.value); 
    //e.stopPropagation(); //stopBubbling 
}

//클릭을 하면 부모(three, two, one, body, html....)까지 전부 클릭된다.
//bubbling이라고 한다.
//divs.forEach(div => div.addEventListener('click', logText));

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, //기본값은 false다. true면 맨 위에서부터 반대로 나온다.
    once: true //한번만 하고 EventListener를 지운다.
}));


//이벤트 캡쳐와 버블링에 대해 더 알아보기
//https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/