const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){ 
    this.classList.add('trigger-enter');
    setTimeout(() => {
        //trigger-enter-active가 시간차를 두고 생기기 떄문에 trigger-enter가 생긴 후에만 생기도록 설정
        if(this.classList.contains('trigger-enter')){ 
            this.classList.add('trigger-enter-active')
        }        
    }, 150); //0.15초 후에 실행

    //위의 구문을 아래와 같이 짧게 쓸 수있다. &&는 앞에 것이 true일 때 뒤에것을 실행한다는 뜻
    //setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

    background.classList.add('open'); //배경 등장

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = { //배경 크기를 저장
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top, //윗쪽에 새로운 요소가 생기면 배경이 밀려나는 것을 막아 준다. 즉 nav태그를 기준으로 배경이 나타남
        left: dropdownCoords.left - navCoords.left
        };

    //style의 크기 및 위치를 위에서 얻은 값으로 변경
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));