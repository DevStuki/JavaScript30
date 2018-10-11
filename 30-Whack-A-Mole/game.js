const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max){ //랜덤 숫자 생성 함수
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const idx = Math.floor(Math.random()*holes.length); //1~6중에 임의의 숫자 생성, 신기하다.. 
    const hole = holes[idx]; //array중 임의의 인덱스에 있는 hole
    if(hole === lastHole){ //마지막과 같은 구멍이라면
        console.log('Ah nah thats the same one bud');
        return randomHole(holes); //다시 실행(초기화)
    } 
    lastHole = hole; //마지막 구멍에 저장
    return hole; //구멍 반환(초기화)
}

function peep(){
    const time = randomTime(200, 1000); //무작위 시간으로
    const hole = randomHole(holes); //무작위 위치에 생성
    hole.classList.add('up'); //해당 hole의 클래스에 up 추가로 트랜지션
    setTimeout(() => { //다시 사라짐
        hole.classList.remove('up');
        if(!timeUp) peep(); //시간이 끝나지 않았다면 계속 반복
    }, time);
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false; 
    score = 0; //점수 초기화
    peep();
    setTimeout(()=> timeUp = true, 10000); //10초 후에 게임 종료
}

function bonk(e){
    if(!e.isTrusted) return; //진짜 클릭된 것이 아님

    score++; //점수 올리고 
    this.classList.remove('up'); //클래스에서 up 제거
    scoreBoard.textContent = score; //화면에 점수 표시

}

moles.forEach(mole => mole.addEventListener('click', bonk)); //두더쥐를 클릭하면 호출