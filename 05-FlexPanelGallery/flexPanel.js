const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    //console.log('hello');
    this.classList.toggle('open'); //클래스이름 리스트에 open을 넣거나 뺀다. 토글됨
}

function toggleActive(e){ //e는 여기서는 transition이 끝난 이벤트
    //console.log(e.propertyName)
    if(e.propertyName.includes('flex')){//만약 이벤트에 flex가 들어가는 게 있다면. 여기서는 트랜지션이 끝난 것 중에 flex가 들어간 게 있다면
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //클릭을 하면 toggleOpen호출
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); //트랜지션이 끝나면 toggleActive 호출