let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]'); //data-time 이라는 속성이 있는 모든 요소들

function timer(seconds){
    clearInterval(countdown); //타이머가 시작할 때 진행중인 타이머를 초기화 한다

    const now = Date.now(); //현재시각
    const then = now + seconds * 1000; //끝나는 시간 = 현재시간 + 입력시간*1000
    displayTimeLeft(seconds); //설정한 시간이 처음에 한번은 바로 나오게
    displayEndTime(then); //타이머가 끝나는 시간을 보여줌

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); //남은시간 = 측정시간 - 현재시간
        if(secondsLeft <= 0){ //0이면 멈춤
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft); //매 초마다 나온다
    }, 1000); //매 1초마다
}

function displayTimeLeft(seconds) { 
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    //만약 reminderSeconds가 10보다 작으면 앞에 0을 붙여준다.
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display; //브라우저의 타이틀도 타이머로 보여줌
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp){ //끝나는 시간 함수
    const end = new Date(timestamp); //측정시간을 넣고
    const hour = end.getHours(); //시간 추출
    const adjustHour = hour > 12 ? hour - 12 : hour; //12시간으로 표시
    const minutes = end.getMinutes(); //분 추출
    endTime.textContent = `Be Back At ${adjustHour}:${minutes < 10 ? '0' : ''}${minutes}`; //html에 바로 적용
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);//html의 dataset에 있는 string을 숫자로 변환
    timer(seconds);
}

buttons.forEach(buttons => buttons.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){ //사용자 지정 폼에 입력
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60); //원래는 초가 들어가니까 *60으로 분으로 만들어줌
    this.reset(); //폼을 다시 비움
});