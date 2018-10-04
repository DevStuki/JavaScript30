const secondHand = document.querySelector('.second-hand'); //초 클래스 캐싱
const minHand = document.querySelector('.min-hand'); //분 클래스 캐싱
const hourHand = document.querySelector('.hour-hand'); //시 클래스 캐싱

function setDate(){
    const now = new Date(); //현재 시간을 할당

    const seconds = now.getSeconds(); //초를 받아서
    const secondsDegrees = (((seconds / 60) * 360)+90); //초니까 60으로 나누고 전체 각도 360을 곱함, +90은 초기에 바늘을 12로 가게 하기 위한 것
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //캐싱한 클래스의 스타일을 변경 
    
    const mins = now.getMinutes();
    const minsDegrees = (((mins / 60) * 360)+90);
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (((hours / 12) * 360)+90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;        
}

setInterval(setDate, 1000); //1초마다 한번씩 실행